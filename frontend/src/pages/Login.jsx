
// import React from 'react';
// import { Link, useNavigate ,  } from 'react-router-dom';
// const Login = () => {
        
//         const [email, setEmail] = useState("") ; 
//         const [password, setPassword] = useState("") ; 
//         const [error , setError] = useState("") ; 

//         const navigate = useNavigate() ; 

//       const submitForm = async (e) => {
//       e.preventDefault();
// };

    
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#070707]">
//       <form className="w-[30vw] min-h-[60vh] bg-[#1a1a1a] rounded-2xl p-8 flex flex-col justify-center gap-4"  onSubmit={submitForm}>
//         <h1 className="text-5xl font-bold text-white text-center mb-6">Welcome Back</h1>

//         <div className="text-white w-full">
//           <label className="text-gray-400 text-sm">Email</label>
//           <input onChange={(e) => setEmail(e.target.value)} value={email}
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             autoComplete="email"
//             className="w-full mt-1 p-
//              2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-gray-400 text-sm mt-4 block">Password</label>
//           <input onChange={(e) => setPassword(e.target.value)} value={password}
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             required
//             autoComplete="current-password"
//             className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="btnnormal mt-4"
//         >
//           Log In
//         </button>

//         <p className="text-gray-400 text-sm mt-4 text-center">
//           Don’t have an account? <Link to="/signup" className="text-blue-400 hover:underline">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_base_url } from '../helper';
import Navbar from '../components/Navbar';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${api_base_url}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      // Optionally save token to localStorage
      localStorage.setItem("token", data.token);
      navigate("/"); // or to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (

    <>

    <Navbar/>

    <div className="flex flex-col items-center justify-center h-screen bg-[#070707]">
      <form onSubmit={handleLogin} className="w-[30vw] bg-[#1a1a1a] rounded-2xl p-8 flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-white text-center mb-6">Welcome Back</h1>

        <label className="text-gray-400 text-sm">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white"
          required
        />

        <label className="text-gray-400 text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 p-2 rounded bg-[#2a2a2a] text-white"
          required
        />

        

        <button type="submit" className="btnnormal mt-4">Login</button>

        <p className="text-red-700 text-sm mt-4 text-center">{error}</p>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>

     </>
  );
};

export default Login;
