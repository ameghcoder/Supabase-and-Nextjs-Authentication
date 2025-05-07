'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { X } from 'lucide-react';
import { EmailOtpType } from '@supabase/supabase-js';
import AfterEmailConfirmation from './action';
import EmailConfirmed from '@/components/layout/email-confirmation-card';
import UpdatePasswordForm from '@/components/layout/update-password';
import { supabase } from '@/utils/supabase/client';


export default function EmailVerification() {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [checkType, setCheckType] = useState<EmailOtpType | null>(null);

    useEffect(() => {
        const handleVerification = async () => {
            try {
                const token_hash = searchParams.get("token_hash");
                const type = searchParams.get("type") as EmailOtpType | null;

                const confirmResp = await fetch("/api/auth/verify-token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ token_hash, type })
                });

                const data = await confirmResp.json();
                if (!confirmResp.ok || data.error) {
                    setErrorMsg(data.error);
                    return;
                }

                const id = data.user.id;

                // now update is_verified
                await AfterEmailConfirmation(id);

                if (data.is_valid) {
                    setIsAuthenticated(true);
                    setCheckType(type);
                }

                if (type == "signup") {
                    await supabase.auth.signOut();
                }

            } catch (error) {
                console.error("Error on page load: ", error);
                setErrorMsg("Something went wrong, try again later");
            } finally {
                setLoading(false);
            }
        };

        handleVerification();
    }, [searchParams]);

    if (loading) {
        return <div className="flex w-full h-full min-h-screen justify-center items-center">
            Loading ...
        </div>;
    }

    if (errorMsg) {
        return <div className="flex w-full h-full min-h-screen justify-center items-center flex-col gap-2">
            <Card className='w-full max-w-sm'>
                <CardHeader className='border-b border-border'>
                    <CardTitle className='flex gap-2 items-center'>
                        <h2 className='text-error text-lg font-bold'>Error</h2>
                        <X className='text-error size-5' />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        {errorMsg}
                    </p>
                    <Link href="/auth/signup" className='block mt-4'>
                        <Button variant="default">
                            Go to Signup
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    }

    if (isAuthenticated && checkType == "signup") {
        return <EmailConfirmed />
    }

    if (isAuthenticated && checkType == "recovery") {
        return <UpdatePasswordForm />
    }

    return <p className="text-error">Something went wrong.</p>
}
