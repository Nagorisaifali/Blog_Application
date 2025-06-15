import React from 'react'
import {Link , useNavigate} from "react-router-dom" ; 


const Navbar = () => {

  const navigate = useNavigate() ; 
  return (
    <>
        <div className='navbar flex items-center justify-between h-[100px] px-[100px] bg-[#0c0c0c] text-white'>
            <div className="logo ">
                {/* <img className='w-[240px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3gj4bWzE4sYUaadTXEXnPe8nfedsyQ0jCg&s" alt="" /> */}
                <h1 className='w-[300px] text-4xl font-bold'>Blog <span className='sp-text'>Coder</span> </h1>
            </div>
            <div className='links flex items-center gap-[20px] ' >
                <Link className='navlink' to="/" >Home</Link>
                <Link className='navlink' to="/about">About</Link>
                <Link className='navlink' to='/uploadBlog' >Blogs</Link>
                <Link className='navlink'to='/services' >Services</Link>
                <Link className='navlink'to='/contact' >Contact</Link>
                <Link className='navlink' to="/signup" >Signup</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar
