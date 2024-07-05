// rrd
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer site-footer bg-[#101010] text-neutral-content p-10">
            <div className='site-container'>
                <div className='footer py-10 gird grid-cols-2 justify-end'>
                    <aside className='flex flex-col gap-9'>
                        <Link to='/'>
                            <img src="../assets/logo.svg" alt="logo" />
                        </Link>
                        <p className='text-[15px] leading-[25px] opacity-50'>
                            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                        </p>
                    </aside>
                    <nav className='ml-auto flex flex-col justify-between h-full items-end'>
                        <ul className='text-white flex gap-8 uppercase text-[13px] font-semibold' style={{ letterSpacing: `2px`, lineHeight: `25px` }}>
                            <NavLink className='hover:text-[#f4b48f]' to='/'>Home</NavLink>
                            <NavLink className='hover:text-[#f4b48f]' to='/headphones'>Headphones</NavLink>
                            <NavLink className='hover:text-[#f4b48f]' to='/speakers'>Spaekers</NavLink>
                            <NavLink className='hover:text-[#f4b48f]' to='/earphones'>earphones</NavLink>
                        </ul>
                        <div className="flex gap-4 items-end">
                            <Link to='#'>
                                <img src="../assets/facebook.svg" alt="facebook" />
                            </Link>
                            <Link to='#'>
                                <img src="../assets/twitter.svg" alt="twitter" />
                            </Link>
                            <Link to='#'>
                                <img src="../assets/instagram.svg" alt="instagram" />
                            </Link>
                        </div>
                    </nav>
                </div>
                <div>
                    <p className='text-[15px] leading-[25px] opacity-50 font-bold'>
                        Copyright 2021. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer