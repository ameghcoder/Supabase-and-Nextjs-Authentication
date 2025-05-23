import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoVector = ({ className }: { className?: string }) => {
    return (
        <Link href="/">
            <Image
                src="/assets/branding/Vector - Logo.png"
                alt="Logo"
                width={28}
                height={28}
                className={className}
            />
        </Link>
    )
}

const LogoVectorWithText = ({ containerClassName, imgClassName }: { containerClassName?: string, imgClassName?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${containerClassName}`}>
            <Image
                src="/assets/branding/Vector - Logo.png"
                alt="Logo"
                width={28}
                height={28}
                className={imgClassName}
            />
            <span className="text-lg font-bold">Auth</span>
        </div>
    )
}

export { LogoVector, LogoVectorWithText }
