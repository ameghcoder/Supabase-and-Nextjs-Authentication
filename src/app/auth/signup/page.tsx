"use client";

import ConfirmationCard from '@/components/layout/confirmation-card';
import { SignupForm } from '@/components/layout/signup-form'
import AlertBox from '@/components/ui/alert-box';
import { emailValidator, passwordValidator } from '@/lib/validator';
import React, { useState } from 'react'

export default function Page() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [emailSent, setEmailSent] = useState<boolean>(false);

    const checkUserExistense = async (): Promise<boolean> => {
        const resp = await fetch("/api/user/is-exists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const data = await resp.json();
        if (!resp.ok) {
            setError(data.error);
            return false;
        }

        if (data.is_exists) {
            setError("This E-mail id is already exists, Login instead.")
            return false;
        }

        return true;
    }

    const addUser = async (id: string | undefined): Promise<void> => {
        if (id == undefined) {
            console.error("Id is undefined");
        }

        const resp = await fetch("/api/user/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, email })
        });

        const data = await resp.json();
        if (!resp.ok) {
            setError(data.error);
        }

        if (data.is_added) {
            console.log("User added!");
            setSuccess(data.message)
        }

        console.warn("User is not added!");
    }

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

            // Check user email is alredy exists or not
            const NotExists = await checkUserExistense();

            if (NotExists) {
                const resp = await fetch("/api/auth/signup", {
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


                // Insert the id and email
                await addUser(data.user?.id);

                // Show the final response
                setSuccess("Signup Successful. Please check your email for verification link.");
                setEmailSent(true);
            }

            return;

        } catch (error) {
            console.error("Error: ", error);
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
            setTimeout(() => {
                setError(null);
                setSuccess(null);
            }, 5000);
        }
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                {
                    (error || success) &&
                    <AlertBox
                        type={error ? "error" : "success"}
                        title={error ? "Error" : "Success"}
                        description={error ? error : success}
                    />
                }
                {
                    emailSent && email ?
                        <ConfirmationCard
                            title="Check your inbox"
                            description={`Thanks for Join us. We've sent you a verification link to the email address ${email}. Verify you E-mail and comeback to login.`}
                            link="https://gmail.com"
                            linkText="Open Mail Box →"
                            email={email}
                        />
                        :
                        <SignupForm
                            email={email}
                            onEmailChange={setEmail}
                            password={password}
                            onPasswordChange={setPassword}
                            onSubmit={handleSubmit}
                            loading={loading}
                        />
                }
            </div>
        </div>
    )
}

