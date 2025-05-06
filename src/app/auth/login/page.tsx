"use client";
import { LoginForm } from "@/components/layout/login-form"
import AlertBox from "@/components/ui/alert-box";
import { emailValidator, passwordValidator } from "@/lib/validator";
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function Page() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            setLoading(true);
            setError(null);
            setSuccess(null);

            const ev = emailValidator.safeParse(email);
            const pv = passwordValidator.safeParse(password);

            if (!ev.success) {
                setError(ev.error.errors[0].message);
                return;
            }

            if (!pv.success) {
                setError(pv.error.errors[0].message);
                return;
            }

            const resp = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!resp.ok) {
                const data = await resp.json();
                setError(data.error);
                return;
            }

            const data = await resp.json();
            setSuccess(data.message);
            router.refresh();
            router.push("/dashboard");

        } catch (error) {
            console.error("Error logging in:", error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);

            setTimeout(() => {
                setError(null);
                setSuccess(null);
            }, 5000)
        }
    }


    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                {
                    error &&
                    <AlertBox
                        type="error"
                        title="Error"
                        description={error}
                    />
                }
                {
                    success &&
                    <AlertBox
                        type="success"
                        title="Success"
                        description={success}
                    />
                }
                <LoginForm
                    email={email}
                    onEmailChange={setEmail}
                    password={password}
                    onPasswordChange={setPassword}
                    onSubmit={handleSubmit}
                    loading={loading}
                />

            </div>
        </div>
    )
}
