import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ResendConfirmationEmailButton } from './resend-confirmation-email'

const ConfirmationCard = ({ title, description, link, linkText, email }: {
    title: string,
    description: string,
    link?: string,
    linkText?: string,
    email: string
}) => {
    return (
        <Card className='max-w-lg mx-auto py-4'>
            <CardContent className='flex flex-col items-center'>
                <h2 className="mb-2 text-sub-heading font-bold text-foreground">{title}</h2>
                <p className='mb-4 text-center text-paragraph text-muted-foreground'>
                    {description}
                </p>
                <div className='flex gap-2 justify-center items-center'>
                    <ResendConfirmationEmailButton email={email} />
                    {
                        link &&
                        <Button type="button" variant="outline">
                            <a href={link} target="_blank" >{linkText}</a>
                        </Button>
                    }
                </div>
            </CardContent>

        </Card>
    )
}

export default ConfirmationCard
