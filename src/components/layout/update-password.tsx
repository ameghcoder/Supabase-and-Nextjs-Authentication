import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'

interface UpdatePasswordProps extends React.ComponentPropsWithoutRef<"div"> {
    buttonAction: (e: React.FormEvent<HTMLFormElement>) => void;
    status: boolean;
    className?: string;
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

export default UpdatePassword
