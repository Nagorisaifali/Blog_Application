import React , {useState} from 'react'
import { useNavigate } from "react-router-dom" 


const Blog = ({ data }) => {


  const navigate = useNavigate() ;

  return (
    <div  onClick={() => {navigate(`/blog/${data._id}`)}}   className="blog w-[300px] bg-[#1a1a1a] text-white p-4 rounded-lg shadow-md">
      {data.image ? (
        <img
          className="w-full h-[200px] object-cover rounded-lg mb-3"
          src={`http://localhost:3000/uploads/${data.image}`}
          alt={data.title}
        />
      ) : (
        <div className="w-full h-[200px] bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
          <span>No Image</span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-1">{data.title}</h3>
      <p className="text-sm text-gray-400 line-clamp-3">{data.desc}</p>
    </div>
  );
};

export default Blog;

