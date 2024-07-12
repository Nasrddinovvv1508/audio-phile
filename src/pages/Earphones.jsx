import React from 'react'
import { BestAudioGear, BgBlackSection } from '../sections'
import { ProductLeftDesc, ShopItems } from '../components'

function Earphones() {
  return (
    <>
      <section className='mb-[160px]'>
        <BgBlackSection text={`earphones`} />
      </section>

      <ProductLeftDesc
        imgLink='../assets/image-removebg-preview(42).png'
        title='YX1 WIRELESS EARPHONES'
        spanText='new product'
        text='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
      />

      <section className='site-container mb-[160px] mt-[240px]'>
        <ShopItems />
      </section>

      <BestAudioGear />
    </>
  )
}

export default Earphones