import RecurringDesc from "./RecurringDesc"

function ProductLeftDesc({ imgLink, title, text, spanText }) {
    return (
        <section className='site-container mb-[160px] grid grid-cols-2 gap-[125px] items-center'>
            <div className='w-[540px] pt-[65px] pr-[95px] pb-[108px] pl-[94px] bg-[#F1F1F1] rounded-lg'>
                <img src={imgLink} alt="product left" />
            </div>

            <RecurringDesc
                spanText={spanText}
                title={title}
                text={
                    text
                } />
        </section>
    )
}

export default ProductLeftDesc