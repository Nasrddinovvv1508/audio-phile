import { ProductDesc, SeeProduct } from '../components'

function Mark2() {
    return (
        <section className='bg-[#141414]'>
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
                        <img src="./public/headphone-semiblack.png" alt="headphone" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mark2