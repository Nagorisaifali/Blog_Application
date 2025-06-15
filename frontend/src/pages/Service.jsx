import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
  return (

    <>
    
    
    

    <div className="px-[100px] py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
        At our blog platform, we not only share valuable content — we also offer tailored services
        to help individuals, startups, and businesses grow their online presence through content,
        design, and strategy. Explore our range of professional services below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 shadow-lg rounded-xl bg-black">
          <h3 className="text-xl font-semibold mb-2">Blog Writing</h3>
          <p className="text-gray-400">
            We craft engaging, well-researched, and SEO-friendly blog posts that drive traffic and boost authority.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-black">
          <h3 className="text-xl font-semibold mb-2">Web Design</h3>
          <p className="text-gray-400">
            We design visually appealing, user-centric interfaces tailored for both desktop and mobile experiences.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-black">
          <h3 className="text-xl font-semibold mb-2">Content Strategy</h3>
          <p className="text-gray-400">
            From planning to execution, we build content strategies that align with your brand and business goals.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-black">
          <h3 className="text-xl font-semibold mb-2">Technical Consulting</h3>
          <p className="text-gray-400">
            Need help with your tech stack, blogging platform, or deployment? We provide hands-on technical support and guidance.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-black">
          <h3 className="text-xl font-semibold mb-2">Custom Blog Setup</h3>
          <p className="text-gray-400">
            Want your own blog? We offer custom blog setup using modern tech (React, Node, MongoDB) tailored to your needs.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-black">
          <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
          <p className="text-gray-400">
            Improve your blog’s speed, SEO, and loading times with our performance auditing and optimization services.
          </p>
        </div>
      </div>
    </div>

    </>
  );
};

export default Services;
