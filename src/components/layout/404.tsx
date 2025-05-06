import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="dark relative flex min-h-screen items-center justify-center bg-background px-6 py-24 sm:py-32 lg:px-8">
            <Image
                width={1920}
                height={1080}
                src="https://images.unsplash.com/photo-1507973077082-fff43ce1d42d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background Image"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
            />
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 relative z-10">
                <div className="text-center">
                    <p className="text-xl font-semibold text-primary">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-7xl">Page not found</h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button variant="default" >
                            <Link href="/" >Go back home</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NotFound
