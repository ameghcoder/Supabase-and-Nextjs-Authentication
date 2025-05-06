import Image from 'next/image'
import React from 'react'

const LogoExtraLarge = ({ className }: { className?: string }) => {
    return (
        <div>
            <Image
                src="/assets/branding/Extra Large (XL) - 512x512px.png"
                alt="Logo"
                width={512}
                height={512}
                className={className}
            />
        </div>
    )
}

const LogoExtraLargeWithText = ({ containerClassName, imgClassName }: { containerClassName?: string, imgClassName?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${containerClassName}`}>
            <Image
                src="/assets/branding/Extra Large (XL) - 512x512px.png"
                alt="Logo"
                width={512}
                height={512}
                className={imgClassName}
            />
            <span className="text-lg font-bold">Auth</span>
        </div>
    )
}

export { LogoExtraLarge, LogoExtraLargeWithText }
