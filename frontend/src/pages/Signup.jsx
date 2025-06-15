

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_base_url } from '../helper';
import Navbar from '../components/Navbar';
const Signup = () => {

    const [name, setName] = useState("") ; 
    const [username, setUsername] = useState("") ; 
    const [email, setEmail] = useState("") ; 
    const [password, setPassword] = useState("") ; 
    const [error , setError] = useState("") ; 

    const navigate = useNavigate() ; 

    const submitForm = async (e) => {
      e.preventDefault();
      setError("");

    try {
    const res = await fetch(`${api_base_url}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, username, email, password })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Signup failed");

      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
};




    return (
      <>
      <Navbar/>
      
    <div className="flex flex-col items-center justify-center h-screen bg-[#070707]">
      <form  onSubmit={submitForm}    className="w-[30vw] min-h-[70vh] bg-[#1a1a1a] rounded-2xl p-8 flex flex-col justify-center gap-4">
        <h1 className="text-5xl font-bold text-white text-center mb-6">Blog Cloudy</h1>

        <div className="text-white w-full">
          <label className="text-gray-400 text-sm">Username</label>
          <input onChange={(e) => {setUsername(e.target.value)}}
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            autoComplete="username"
            value={username}
            className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-gray-400 text-sm mt-4 block">Name</label>
          <input onChange={(e) => {setName(e.target.value)}}
            value={name}
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-gray-400 text-sm mt-4 block">Email</label>
          <input onChange={(e) => {setEmail(e.target.value)}}
          value={email}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-gray-400 text-sm mt-4 block">Password</label>
          <input onChange={(e) => {setPassword(e.target.value)}}
          value={password}
            type="password"
            name="password"
            placeholder="Enter a secure password"
            required
            autoComplete="new-password"
            className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="btnnormal mt-4"
        >
          Sign Up
        </button>

        <p className="text-red-700 text-sm mt-4 text-center">
          {error}
        </p>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>

        
      </form>
    </div>

    </>
  );
};

export default Signup;
