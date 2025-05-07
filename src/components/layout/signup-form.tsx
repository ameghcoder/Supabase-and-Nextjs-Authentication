import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import { LogoVector } from "../branding/logo-vector"
import { ResendConfirmationEmailCard } from "./resend-confirmation-email"

export function SignupForm({
    className,
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onSubmit,
    loading
}: {
    className?: string,
    email: string,
    onEmailChange: (email: string) => void,
    password: string,
    onPasswordChange: (password: string) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    loading: boolean
}) {
    return (
        <div className={cn("flex flex-col gap-6", className)} >
            <div className="flex items-center justify-center">
                <LogoVector />
            </div>
            <Card className="max-w-md mx-auto overflow-hidden !py-0">
                <CardContent className="grid p-0">
                    <form onSubmit={(e) => { onSubmit(e); }} className="p-6 md:p-8 min-h-[500px] flex flex-col justify-center">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Join the community</h1>
                                <p className="text-balance text-muted-foreground">
                                    Register a new account
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => { onEmailChange(e.target.value) }}
                                    disabled={loading}
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => { onPasswordChange(e.target.value) }}
                                    disabled={loading}
                                    required />
                            </div>
                            <Button type="submit" className="w-full disabled:opacity-100" disabled={loading}>
                                {loading ? <span className="flex items-center text-primary-foreground">
                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                    Loading...
                                </span> : "Signup"}
                            </Button>
                            <div className="text-center text-sm">
                                <div>
                                    Already have an account?{" "}
                                    <Button variant="ghost" className="px-1 text-blue-500 underline">
                                        <a href="/auth/login">
                                            Login
                                        </a>
                                    </Button>
                                </div>
                                <div>
                                    Failed to Confirm Email?{" "}
                                    <ResendConfirmationEmailCard />
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
