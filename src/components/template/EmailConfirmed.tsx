import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const EmailConfirmed = () => {
    return (
        <div className='flex items-center justify-center h-full min-h-screen w-full'>
            <Card className='w-full max-w-sm'>
                <CardHeader className='border-b border-border'>
                    <CardTitle className='flex gap-2 items-center'>
                        Email Verified
                        <CircleCheckBig className='text-success size-5' />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your email is confirmed now. Now you can login.</p>
                    <Link href="/auth/login" className='block mt-4'>
                        <Button variant="default">
                            Go to Login
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default EmailConfirmed
