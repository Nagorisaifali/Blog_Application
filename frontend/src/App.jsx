import { useState } from 'react'

import './App.css'
import { BrowserRouter , Router , Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Nopage from './pages/Nopage'
import SingleBlog from './pages/SingleBlog'
import Signup from './pages/Signup'
import Login from './pages/Login'
import UploadBlog from './pages/UploadBlog'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Service'
import EditBlog from './pages/EditBlog'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/signup" element={<Signup/>} />
          <Route path = "/login" element={<Login/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "/blog/:blogId" element={<SingleBlog/>} />
          <Route path = "/uploadBlog" element={<UploadBlog/>} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path = "*" element={<Nopage/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
