import React from 'react'

function BgBlackSection({ text }) {
    return (
        <div className='bg-[#141414]'>
            <div className='site-container py-[98px] text-center uppercase'>
                <h1 className='font-bold text-[40px] tracking-[1px] text-white'>{text}</h1>
            </div>
        </div>
    )
}

export default BgBlackSection