import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='w-full flex gap-2 justify-between'>
                <div>
                    <a href="#">Home</a>
                </div>
                <div className='flex gap-2'>
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
