import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import AlertBox from '../ui/alert-box'
import { emailValidator } from '@/lib/validator'

const ResendConfirmationEmailButton = ({ email, updateStatus }: { email: string, updateStatus?: (e: boolean) => void | null }) => {
    const [emailSent, setEmailSent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSendLink = async () => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(null);

            const ev = emailValidator.safeParse(email);
            if (!ev.success) {
                setError(ev.error.errors[0].message);
                return;
            }

            const resp = await fetch("/api/auth/send/email-verification-link", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })

            const data = await resp.json();

            if (resp.ok) {
                setEmailSent(true);
                updateStatus?.(true);
                setSuccess(data.message);
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.log("Error in sending the verification email: ", error);

        } finally {
            setLoading(false);
            setTimeout(() => {
                setError(null);
                setSuccess(null);
                setEmailSent(false);
            }, 5000);
        }
    }

    return (
        <>
            <Button type="button" className="cursor-pointer" onClick={handleSendLink} disabled={loading}>
                {loading ? <span className="flex items-center text-primary-foreground">
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                </span> : "Resend Email"}
            </Button>
            {
                (emailSent || error || success) && <AlertBox
                    type={error ? "error" : "success"}
                    title={error ? "Error" : "Success"}
                    description={error ? error : success}
                />
            }
        </>
    )
}

const ResendConfirmationEmailCard = () => {
    const [emailSentCard, setEmailSentCard] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="px-1 text-blue-500 underline cursor-pointer">Resend Email</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-card">
                {
                    emailSentCard ?
                        <div className="pt-4 text-center">
                            <h2 className="mb-2 text-sub-heading font-bold text-foreground">Check your inbox</h2>
                            <p className='mb-4 text-center text-paragraph text-muted-foreground'>
                                If you&apos;ve an account using the given email address, then you will get an E-mail that contains Verification Email Link.
                            </p>
                        </div>
                        :
                        <>
                            <DialogHeader>
                                <DialogTitle>Resend Email</DialogTitle>
                                <DialogDescription>
                                    Enter your email and you&apos;ll get a Verification Link in your email.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col items-start gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Your E-mail
                                    </Label>
                                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="me@example.com" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <ResendConfirmationEmailButton
                                    email={email}
                                    updateStatus={setEmailSentCard}
                                />
                            </DialogFooter>
                        </>
                }
            </DialogContent>
        </Dialog>
    )
}

export { ResendConfirmationEmailButton, ResendConfirmationEmailCard }
