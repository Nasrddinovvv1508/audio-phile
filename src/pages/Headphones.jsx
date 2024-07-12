import React from 'react'
import { BestAudioGear, BgBlackSection } from '../sections'
import { ProductLeftDesc, ProductRightDesc } from '../components'

function Headphones() {
  return (
    <>
      <section className='mb-[160px]'>
        <BgBlackSection text='HEADPHONES' />
      </section>

      <>
        <ProductLeftDesc
          imgLink="../assets/product-left-desc-earphone.png"
          spanText={`new product`}
          title='XX99 Mark II Headphones'
          text={`The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.`}
        />
      </>

      <>
        <ProductRightDesc
          imgLink='../assets/product-right-desc-earphone.png'
          title={`XX99 Mark I Headphones`}
          text='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
        />
      </>

      <>
        <ProductLeftDesc
          imgLink="../assets/product-left-desc-earphone2.png"
          text={`Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`}
          title='XX59 Headphones'
        />
      </>

      <BestAudioGear />
    </>
  )
}

export default Headphones