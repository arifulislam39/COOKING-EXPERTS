import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-800'><div className='flex justify-between ml-56 me-56 mt-5 items-center'>
            <h2 className='font-bold text-white	 text-lg '>Cooking Experts</h2>
            <div className='flex gap-5'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Home</NavLink>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Blog</NavLink>

            </div>
            <button className="bg-indigo-500 rounded-lg p-3 text-white">
                Star Applying
            </button>
        </div></div>
        </div>
    );
};

export default Navbar;