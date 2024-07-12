import React from 'react'
import { Carousel } from "@material-tailwind/react";
import ProductDesc from './ProductDesc';
import SeeProduct from './SeeProduct';

function CarouselComponent() {
    return (
        <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className=''>
                <div className='site-container'>
                    <div className='text-white grid grid-cols-2 items-center'>
                        <ProductDesc >
                            <div className='w-[400px]'>
                                <div className='flex flex-col gap-6 mb-10'>
                                    <span className='text-white opacity-50 text-sm' style={{ letterSpacing: `10px`, lineHeight: `19px` }}>NEW PRODUCT</span>
                                    <h1 className='text-[56px] font-bold leading-[58px] tracking-[2px]'>
                                        XX99 Mark II Headphones
                                    </h1>
                                    <p className='text-[15px] w-[349px] opacity-75 font-medium leading-[25px]'>
                                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                                    </p>
                                </div>
                                <SeeProduct />
                            </div>
                        </ProductDesc>
                        <div>
                            <img src="../assets/headphone-semiblack.png" alt="headphone" />
                        </div>
                    </div>
                </div>
            </div>
            
        </Carousel>
    )
}

export default CarouselComponent