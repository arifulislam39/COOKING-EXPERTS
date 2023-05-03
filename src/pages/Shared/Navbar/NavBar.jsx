import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className='bg-slate-800 w-full h-20 align-items-center'><div className='flex justify-between ml-56 me-56 mt-5 items-center'>
            <h2 className='font-bold text-white	 text-lg '>Cooking Experts</h2>
            <div className='flex gap-5 text-white'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-cyan-600' : '')}>Home</NavLink>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-cyan-600' : '')}>Blog</NavLink>

            </div>

            {user ?
            <button onClick={handleLogout} className="btn btn-active btn-primary">Logout</button> :
            <Link to ="/login">
            <button className="bg-indigo-500 rounded-lg p-3 text-white">
                Login
            </button>
            </Link>}
            
        </div></div>
        </div>
    );
};

export default Navbar;