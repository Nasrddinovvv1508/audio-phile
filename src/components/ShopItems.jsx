// icons
import { FaChevronRight } from 'react-icons/fa'

// rrd
import { Link } from 'react-router-dom'

function ShopItems() {
    return (
        <div className="flex gap-[30px]">
            <div className='w-[350px] h-[204px] bg-[#F1F1F1] rounded-md pb-[30px] flex flex-col justify-end items-center '>
                <img src="../assets/head-shop.svg" alt="img" className="mb-[36px]" />
                <h3 className="text-[18px] font-bold leading-[25px] tracking-[1px] uppercase mb-[15px]">Headphones</h3>
                <Link to='/headphones' className="flex items-center gap-[13px] text-[13px] font-bold uppercase opacity-50 hover:opacity-80 leading-[18px] tracking-[1px]">
                    Shop <FaChevronRight size={11} className="text-[#D87D4A] " />
                </Link>
            </div>

            <div className='w-[350px] h-[204px] bg-[#F1F1F1] rounded-md pb-[30px] flex flex-col justify-end items-center '>
                <img src="../assets/speak-shop.svg" alt="img" className="mb-[36px]" />
                <h3 className="text-[18px] font-bold leading-[25px] tracking-[1px] uppercase mb-[15px]">Speakers</h3>
                <Link to='/headphones' className="flex items-center gap-[13px] text-[13px] hover:opacity-80 font-bold uppercase opacity-50 leading-[18px] tracking-[1px]">
                    Shop <FaChevronRight size={11} className="text-[#D87D4A] " />
                </Link>
            </div>

            <div className='w-[350px] h-[204px] bg-[#F1F1F1] rounded-md pb-[30px] flex flex-col justify-end items-center '>
                <img src="../assets/ear-shop.svg" alt="img" className="mb-[36px] h-[126px]" />
                <h3 className="text-[18px] font-bold leading-[25px] tracking-[1px] uppercase mb-[15px]">earphones</h3>
                <Link to='/headphones' className="flex items-center gap-[13px] text-[13px] hover:opacity-80 font-bold uppercase opacity-50 leading-[18px] tracking-[1px]">
                    Shop <FaChevronRight size={11} className="text-[#D87D4A] " />
                </Link>
            </div>
        </div>
    )
}

export default ShopItems