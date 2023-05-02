import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-800 w-full h-20 align-items-center'><div className='flex justify-between ml-56 me-56 mt-5 items-center'>
            <h2 className='font-bold text-white	 text-lg '>Cooking Experts</h2>
            <div className='flex gap-5 text-white'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-cyan-600' : '')}>Home</NavLink>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-cyan-600' : '')}>Blog</NavLink>

            </div>
            <button className="bg-indigo-500 rounded-lg p-3 text-white">
                Login
            </button>
        </div></div>
        </div>
    );
};

export default Navbar;