import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

const ConfirmationCard = ({ title, description, link, linkText }: {
    title: string,
    description: string,
    link?: string,
    linkText?: string
}) => {
    return (
        <Card className='max-w-lg mx-auto py-4'>
            <CardContent className='flex flex-col items-center'>
                <h2 className="mb-2 text-sub-heading font-bold text-foreground">{title}</h2>
                <p className='mb-4 text-center text-paragraph text-muted-foreground'>
                    {description}
                </p>
                {
                    link &&
                    <Button variant="default">
                        <a href={link} target="_blank" >{linkText}</a>
                    </Button>
                }
            </CardContent>

        </Card>
    )
}

export default ConfirmationCard
