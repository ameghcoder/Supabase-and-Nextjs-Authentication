"use client"
import AlertBox from '@/components/ui/alert-box';
import { supabase } from '@/utils/supabase/client';
import { passwordValidator } from '@/lib/validator';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'

interface FormElements extends HTMLFormControlsCollection {
    'new-password': HTMLInputElement;
}

interface ResetForm extends HTMLFormElement {
    elements: FormElements;
}

interface UpdatePasswordProps extends React.ComponentPropsWithoutRef<"div"> {
    buttonAction: (e: React.FormEvent<HTMLFormElement>) => void;
    status: boolean;
    className?: string;
}

const UpdatePasswordForm = () => {
    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [updated, setUpdated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleReset = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();

            setLoading(true);

            const form = e.currentTarget as ResetForm;
            const formData = new FormData(form);
            const newPassword = (formData.get('new-password') as string).trim();

            // validate new password
            const validation = passwordValidator.safeParse(newPassword);

            if (!validation.success) {
                setErrorMsg(validation.error.errors[0].message);
                return;
            }

            // Now update password
            const { data: userData, error } = await supabase.auth.updateUser({ password: newPassword });

            if (error || !userData?.user) {
                console.error("Password update failed, Error:", error);
                setErrorMsg("Failed to update password");
                return;
            }

            setUpdated(true);
            await supabase.auth.signOut();

            setTimeout(() => {
                router.refresh();
                router.push("/auth/login");
            }, 2000)

        } catch (error) {
            console.log("Error in updating password: ", error);
            setErrorMsg("Something went wrong, try again later or generate new link");
        } finally {
            setLoading(false);
            setTimeout(() => {
                setErrorMsg(null);
            }, 5000)
        }
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-lg">
                {
                    errorMsg &&
                    <AlertBox
                        type="error"
                        title="Error"
                        description={errorMsg}
                    />
                }
                {
                    updated &&
                    <AlertBox
                        type="success"
                        title="Success"
                        description="Your password updated, you'll be redirected to the Login page"
                    />
                }
                {
                    !updated && <UpdatePassword status={loading} buttonAction={handleReset} />
                }
            </div>
        </div>
    )
}

const UpdatePassword = ({
    buttonAction,
    status,
    className,
    ...props
}: UpdatePasswordProps) => {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Set New Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={buttonAction}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="password">New Password</Label>
                                <Input id="password" name="new-password" type="password" required disabled={status} />
                            </div>
                            <Button type="submit" className="w-full" disabled={status}>
                                {status ? <span className="flex items-center text-primary-foreground">
                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                    Wait ...
                                </span> : "Set New Password"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}


export default UpdatePasswordForm
