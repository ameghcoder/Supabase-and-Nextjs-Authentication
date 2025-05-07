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
import { useState } from "react"
import AlertBox from "../ui/alert-box"
import { emailValidator } from "@/lib/validator"

export function ForgotPassword() {
    const [email, setEmail] = useState<string>("");
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

            const resp = await fetch("/api/auth/send/password-recovery-link", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })

            const data = await resp.json();

            if (resp.ok) {
                setEmailSent(true);
                setSuccess(data.message);
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.log("Error in sending the reset link: ", error);

        } finally {
            setLoading(false);
            setTimeout(() => {
                setError(null);
                setSuccess(null);
            }, 5000);
        }
    }

    return (
        <>
            <div>
                {
                    (error || success) &&
                    <AlertBox
                        type={error ? "error" : "success"}
                        title={error ? "Error" : "Success"}
                        description={error ? error : success}
                    />
                }
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="px-1 text-blue-500 cursor-pointer">Forgot Password</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-card">
                    {
                        emailSent ?
                            <div className="pt-4 text-center">
                                <h2 className="mb-2 text-sub-heading font-bold text-foreground">Check your inbox</h2>
                                <p className='mb-4 text-center text-paragraph text-muted-foreground'>
                                    If you&apos;ve an account using the given email address, then you will get an E-mail that contains Password Reset Link.
                                </p>
                            </div>
                            :
                            <>
                                <DialogHeader>
                                    <DialogTitle>Forgot Password</DialogTitle>
                                    <DialogDescription>
                                        Enter your email and you&apos;ll get a Password Reset link in your email.
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
                                    <Button type="button" onClick={handleSendLink} disabled={loading}>
                                        {loading ? <span className="flex items-center text-primary-foreground">
                                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                            Loading...
                                        </span> : "Send Reset Link"}
                                    </Button>
                                </DialogFooter>
                            </>
                    }
                </DialogContent>
            </Dialog>
        </>
    )
}
