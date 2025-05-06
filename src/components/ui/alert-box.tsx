import { CircleAlert, CircleCheckBig, Info, ShieldAlert } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export default function AlertBox({
    type, title, description, className, animationDuration = 5000
}: {
    type: "success" | "info" | "warning" | "error",
    title: string,
    description: string | null,
    className?: string,
    animationDuration?: number
}) {
    return (
        <Alert variant={type} className={`overflow-hidden w-full max-w-lg fixed top-4 right-0 z-[100000] md:right-4 border border-border ${className}`}>
            {
                type === "success" ? <CircleCheckBig className="h-4 w-4" /> :
                    type === "info" ? <Info className="h-4 w-4" /> :
                        type === "warning" ? <CircleAlert className="h-4 w-4" /> :
                            type === "error" ? <ShieldAlert className="h-4 w-4" /> : null
            }
            <AlertTitle className="font-semibold tracking-wide text-lg">{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
            <span className={`block absolute w-full bottom-0 left-0 h-1 !p-0 bg-${type} animation-timeout-line`} style={{ animationDuration: `${animationDuration}ms` }}>
            </span>
            <span className="sr-only bg-error"></span>
            <span className="sr-only bg-success"></span>
            <span className="sr-only bg-info"></span>
            <span className="sr-only bg-warning"></span>
        </Alert>
    )
}
