import React from 'react'
import { BestAudioGear, BgBlackSection } from '../sections'
import { ProductLeftDesc, ProductRightDesc, ShopItems } from '../components'

function Speakers() {
  return (
    <>
      <section className='mb-[160px]'>
        <BgBlackSection text='speakers' />
      </section>

      <ProductLeftDesc
        imgLink='../assets/image-removebg-preview(38).png'
        title='ZX9 SPEAKER'
        spanText='new product'
        text='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
      />

      <ProductRightDesc
        imgLink={`../assets/image-removebg-preview(49).png`}
        title='ZX7 SPEAKER'
        text={`Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.`}
      />

      <section className='site-container mb-[160px] mt-[240px]'>
        <ShopItems />
      </section>

      <BestAudioGear />
    </>
  )
}

export default Speakers