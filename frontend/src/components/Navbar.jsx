// import React from 'react'
// import {Link , useNavigate} from "react-router-dom" ; 


// const Navbar = () => {

//   const navigate = useNavigate() ; 
//   return (
//     <>
//         <div className='navbar flex items-center justify-between h-[100px] px-[100px] bg-[#0c0c0c] text-white'>
//             <div className="logo ">
//                 {/* <img className='w-[240px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3gj4bWzE4sYUaadTXEXnPe8nfedsyQ0jCg&s" alt="" /> */}
//                 <h1 className='w-[300px] text-4xl font-bold'>Blog <span className='sp-text'>Coder</span> </h1>
//             </div>
//             <div className='links flex items-center gap-[20px] ' >
//                 <Link className='navlink' to="/" >Home</Link>
//                 <Link className='navlink' to="/about">About</Link>
//                 <Link className='navlink' to='/uploadBlog' >Blogs</Link>
//                 <Link className='navlink'to='/services' >Services</Link>
//                 <Link className='navlink'to='/contact' >Contact</Link>
//                 <Link className='navlink' to="/signup" >Signup</Link>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='navbar flex items-center justify-between h-[80px] px-4 md:px-8 lg:px-[100px] bg-[#0c0c0c] text-white'>
        <div className="logo">
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
            Blog <span className='sp-text'>Coder</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-5'>
          <Link className='navlink' to="/">Home</Link>
          <Link className='navlink' to="/about">About</Link>
          <Link className='navlink' to="/uploadBlog">Blogs</Link>
          <Link className='navlink' to="/services">Services</Link>
          <Link className='navlink' to="/contact">Contact</Link>
          <Link className='navlink' to="/signup">Signup</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-[#0c0c0c] text-white pb-4'>
          <Link className='navlink py-1' to="/">Home</Link>
          <Link className='navlink py-1' to="/about">About</Link>
          <Link className='navlink py-1' to="/uploadBlog">Blogs</Link>
          <Link className='navlink py-1' to="/services">Services</Link>
          <Link className='navlink py-1' to="/contact">Contact</Link>
          <Link className='navlink py-1' to="/signup">Signup</Link>
        </div>
      )}
    </>
  )
}

export default Navbar
