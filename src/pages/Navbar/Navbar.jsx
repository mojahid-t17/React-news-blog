import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import defaultUserProfile from '../../assets/user.png';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const Navigate=useNavigate();
  const {logOut,user}=useContext(AuthContext);
  const handleSignout=()=>{
    logOut()
    .then(()=>{
      
    })
   
  }
    const navLInk=<>
        <li className=' text-xl'>
            <NavLink className={({ isActive }) => (isActive ? 'text-rose-700' : 'text-[#706F6F]')}  to='/'>Home</NavLink>
        </li>
        <li className=' text-xl'>
            <NavLink className={({ isActive }) => (isActive ? 'text-rose-700' : 'text-[#706F6F]')}   to='/about'>About</NavLink>
        </li>
        <li className=' text-xl'>
            <NavLink className={({ isActive }) => (isActive ? 'text-rose-700' : 'text-[#706F6F]')}  to='/career'>Career</NavLink>
        </li>
      
      
    </>
    return (
        <div className='mt-8'>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navLInk}
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navLInk
     }
    </ul>
    
  </div>
  <div className="navbar-end">
 
{
  user? <button className='btn btn-warning' onClick={handleSignout}>Signout</button> : <button className="btn">
  <img className='rounded-full' src={defaultUserProfile} alt="" />
  <Link to="/login" className='font-bold text-xl'> LogIn</Link>
 </button>
 }
  </div>
</div>
        </div>
    );
};

export default Navbar;