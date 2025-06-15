
import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {

  const submitbtn = () =>{
    alert("Your Message has been sent.......") ; 
  }

  return (
    <>
    
    <Navbar/>
    
    <div className="px-[100px] py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-2xl mx-auto mt-6 text-left">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input type="text" className="w-full border p-2 rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" className="w-full border p-2 rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea className="w-full border p-2 rounded-md" rows="5" placeholder="Your Message"></textarea>
        </div>
        <button onClick={submitbtn} type="submit" className="btnnormal">Send Message</button>
      </form>
    </div>

    </>
  );
};

export default Contact;