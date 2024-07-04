// icons
import { FaChevronRight } from "react-icons/fa";

// rrd
import { Link } from 'react-router-dom'

// components
import { ShopItems } from "../components";

function ShopLinks() {
    return (
        <section className="mb-[168px]">
            <div className='site-container'>
                <div>
                    <ShopItems />
                </div>
            </div>
        </section>
    )
}

export default ShopLinks