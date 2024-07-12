import SeeProduct from "./SeeProduct"

function RecurringDesc({ spanText, title, text }) {
    return (
        <div className="w-[445px]">
            <span className="text-[14px] leading-[19px] tracking-[10px] text-[#D87D4A] uppercase">{spanText && spanText}</span>
            <h1 className="font-bold text-[40px] leading-[44px] tracking-[1px] uppercase mt-[16px]">{title}</h1>
            <p className="mt-[32px] text-[15px] leading-[25px] text-black opacity-50 mb-[40px]">
                {text}
            </p>

            <SeeProduct />
        </div>
    )
}

export default RecurringDesc