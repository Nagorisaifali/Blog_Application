
import React from 'react';
import Navbar from '../components/Navbar'

const About = () => {
  return (

    <>
   
    <div className="px-[100px] py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        Welcome to our blogging platform – your go-to destination for all things tech, code, and creativity. 
        Whether you're a developer, designer, or digital enthusiast, our blog is designed to inspire, inform, and ignite your curiosity.
      </p>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        Our mission is simple: to break down complex concepts into engaging and digestible articles that empower readers 
        to stay updated and grow in the fast-paced world of technology. We believe learning should be accessible, 
        practical, and enjoyable.
      </p>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        Founded by a team of passionate developers, this blog covers topics ranging from modern web development (like 
        React, Node.js, and MongoDB), UI/UX best practices, programming tips, tool reviews, and even career advice 
        for tech professionals.
      </p>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Join us on this journey to explore the ever-evolving tech landscape. Subscribe for weekly updates, 
        share your thoughts in the comments, and become part of a growing community that loves to build and learn together.
      </p>
    </div>

     </>
  );
};

export default About;
