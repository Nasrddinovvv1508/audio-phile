// rrd
import { Link, NavLink } from 'react-router-dom'

// icons
import { FaCartArrowDown } from "react-icons/fa";

// components
import Cart from './Cart';

function Navbar() {
    return (
        <header className='bg-[#141414]'>
            <div className='site-container py-6' style={{ borderBottom: `2px solid #333333` }}>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to={`/`}>
                            <img src="../assets/logo.svg" alt="logo" />
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
        </header>
    )
}

export default Navbar