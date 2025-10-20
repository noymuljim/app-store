import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import githubIcon from '../../assets/fi_2111432.png'

const Navbar = () => {
    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `m-2 px-2 py-1 rounded transition duration-200 ${isActive
                        ? 'text-[#632EE3] underline font-semibold'
                        : 'text-gray-700 hover:text-[#632EE3]'
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink to="/apps"
                className={({ isActive }) =>
                    `m-2 px-2 py-1 ${isActive
                        ? 'text-[#632EE3] underline font-bold'
                        : 'text-gray-700 hover:text-[#632EE3]'
                    }`
                }
            >
                Apps
            </NavLink>

            <NavLink
                to="/installedList"
                className={({ isActive }) =>
                    `m-2 px-2 py-1 rounded transition duration-200 ${isActive
                        ? 'text-[#632EE3] underline font-semibold'
                        : 'text-gray-700 hover:text-[#632EE3]'
                    }`
                }
            >
                Installation
            </NavLink>

        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='w-11/13 flex mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to={`/`}>
                        <div className='flex items-center'>
                            <img className='w-[40px] mr-3.5' src={logo} alt="" />
                            <h1 className="text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                HERO.IO
                            </h1>

                        </div>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* className=' */}


                    <a href="https://github.com/noymuljim">
                        <button className='px-3 cursor-pointer py-2 rounded flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                            <div className='flex gap-2'>
                                <img src={githubIcon} alt="" />
                                <h1 className='font-semibold text-white'>Contribute</h1>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;