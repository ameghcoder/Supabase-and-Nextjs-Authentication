import React from 'react'

const Header = () => {
    return (
        <div className="w-full px-4">
            <div className='w-full flex gap-4 justify-between'>
                <div>
                    <a href="#">Home</a>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <a href="/auth/login">login</a>
                    </div>
                    <div>
                        <a href="/auth/signup">signup</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
