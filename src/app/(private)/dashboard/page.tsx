"use client";

import LogoutButton from "@/components/layout/logout-button";

import { supabase } from '@/utils/supabase/client';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {

    const [userEmail, setUserEmail] = useState<string | undefined>("Loading ...");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDetails = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.error(error.message);
                setError(error.message);
            }

            if (data.user?.id) {
                setUserEmail(data.user.email);
            }
        }

        getDetails();
    })

    return (
        <div className="w-full flex gap-4 flex-col px-8 py-4">
            <h1 className="text-heading">User Dashboard</h1>
            {
                error ?
                    <p className="text-error">
                        {error}
                    </p>
                    :
                    <div className="flex flex-col gap-4">
                        <h2 className="text-sub-heading">User Email - {userEmail}</h2>
                        <LogoutButton />
                    </div>
            }
        </div>
    )
}
