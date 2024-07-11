import React from 'react'
import { ProductDesc } from '../components'
import { Button } from '@material-tailwind/react'
import toast from 'react-hot-toast'

function BestAudioGear() {
    return (
        <section className='site-container grid grid-cols-2 gap-[125px] items-center mb-[180px]'>
            <ProductDesc>
                <h1 className='font-bold text-[40px] leading-[44px] tracking-[1px] uppercase mb-8'>
                    Bringing you the <span className='text-[#d87d4a]'>best</span>  audio gear
                </h1>
                <p className='max-w-[445px] text-[15px] leading-[25px] text-[#7d7d7d]'>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </ProductDesc>

            <div>
                <img src="../assets/man-earphone.png" alt="man earphone" />
            </div>
        </section>
    )
}

export default BestAudioGear