// rrd
import { Link, NavLink } from 'react-router-dom'

// icons
import { FaCartArrowDown } from "react-icons/fa";

// components
import Cart from './Cart';

function Navbar() {
    return (
        <div className='bg-[#141414]'>
            <div className='site-container py-6 border-b-2'>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to={`/`}>
                            <img src="./public/logo.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-center">
                        <ul className='text-white flex gap-8 uppercase text-[15px] font-semibold' style={{ letterSpacing: `2px`, lineHeight: `25px` }}>
                            <NavLink className='hover:text-[#f4b48f]' to='/'>Home</NavLink>
                            <NavLink className='hover:text-[#f4b48f]' to='/headphones'>Headphones</NavLink>
                            <NavLink className='hover:text-[#f4b48f]' to='/speakers'>Spaekers</NavLink>
                            <NavLink className='hover:text-[#f4b48f]' to='/earphones'>earphones</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar