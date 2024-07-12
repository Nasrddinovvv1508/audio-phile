// components
import { ButtonTransparent, ProductDesc, SeeProduct } from '../components'

// sectins
import { BestAudioGear, Mark2, ShopLinks } from '../sections'

function Home() {
  return (
    <>
      <Mark2 />
      <ShopLinks />

      <section className='mb-[48px]'>
        <div className='site-container bg-[#D87D4A] rounded-lg'>
          <div className='w-full pl-[117px] pt-[96px] pr-[95px] grid grid-cols-2 items-start gap-[138px] text-white relative'>

            <img
              src="../assets/bg-lines.png"
              className='absolute'
              alt="lines" />

            <div className='z-10'>
              <img src="../assets/hero-speaker.png" alt="hero speaker" />
            </div>
            <div className='z-10 pt-[32px]'>
              <ProductDesc>
                <h1 className='text-[56px] font-bold leading-[58px] tracking-[2px] mb-6'>ZX9 SPEAKER</h1>
                <p className='text-[15px] leading-[25px] mb-10'>
                  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <button className='bg-black rounded-sm hover:bg-white font-medium hover:text-black py-[15px] px-[30px] uppercase'>
                  See Product
                </button>
              </ProductDesc>
            </div>
          </div>
        </div>
      </section>

      <section className='site-container pl-[95px] py-[101px] bg-[url("../assets/bg-speaker.png")] bg-no-repeat mb-12'>
        <ProductDesc>
          <h1 className='font-bold text-[28px] leading-[38px] tracking-[2px] mb-8'>ZX7 SPEAKER</h1>
          <ButtonTransparent />
        </ProductDesc>
      </section>

      <section className='site-container grid grid-cols-2 mb-[200px]'>
        <img src="../assets/ear-phone-bitmap.png" alt="ear phone" />
        <ProductDesc>
          <div className='w-full h-full rounded-lg pt-[101px] pl-[95px] bg-[#F1F1F1]'>
            <h1 className='font-bold text-[28px] leading-[38px] tracking-[2px] mb-8'>YX1 EARPHONES</h1>
            <ButtonTransparent />
          </div>
        </ProductDesc>
      </section>

      <BestAudioGear />
    </>
  )
}

export default Home