"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { LogOutIcon } from 'lucide-react';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const resp = await fetch("/api/auth/logout", {
            method: "POST"
        });

        const data = await resp.json();

        if (resp.ok) {
            router.refresh();
            router.push("/auth/login");
        } else {
            console.error("Error: ", data.error);
        }
    }
    return (
        <Button variant="outline" className="cursor-pointer w-fit" onClick={handleLogout}>
            <LogOutIcon />
            Logout
        </Button>
    )
}

export default LogoutButton
