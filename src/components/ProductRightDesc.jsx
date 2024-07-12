import React from 'react'
import RecurringDesc from './RecurringDesc'

function ProductRightDesc({ imgLink, title, text, spanText }) {
    return (
        <section className='site-container grid grid-cols-2 gap-[125px] items-center mb-[160px]'>
            <RecurringDesc
                title={title}
                text={text} />

            <div className='w-[540px] pt-[65px] pr-[95px] pb-[108px] pl-[94px] bg-[#F1F1F1] rounded-lg'>
                <img src={imgLink} alt="product left" />
            </div>
        </section>
    )
}

export default ProductRightDesc