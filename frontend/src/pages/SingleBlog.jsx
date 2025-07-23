


import React  from 'react'
import Navbar from '../components/Navbar'
import { api_base_url } from '../helper';
import { useParams , useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import parse from 'html-react-parser';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';
const userId = localStorage.getItem("userId");
const username = localStorage.getItem("username");


const SingleBlog = () => {

    let { blogId } = useParams() ; 

    const navigate = useNavigate();

    const [data , setData] = useState(null) ; 

    const [image , setImage] = useState("") ; 

    const getBlog =  async() => {
          try {
               await fetch(`${api_base_url}/api/auth/getBlog`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    blogId : blogId , 
                  token : localStorage.getItem("token") , 
                 })
                }).then((res) => res.json()).then((data) =>{
                  if(data.success){
                      setData(data.blog) ; 
                      setImage(data.blog.image) ; 
                  }else {
                    alert(data.msg) ; 
                  }
                })
              
              } catch (err) {
                console.error(err);
              }
      };
      

      const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
          const res = await fetch(`${api_base_url}/api/auth/deleteBlog/${data._id}`, {
            method: "DELETE",
          });
          const result = await res.json();
          if (result.success) {
            alert("Blog deleted successfully");
            navigate("/");
          } else {
            alert("Failed to delete blog");
          }
        }
      };


    
      useEffect(() => {
        getBlog() ; 
      },[ blogId ]) ; 

  return (
   <>
    <Navbar/>

    
    <div className='single-blog px-[100px] mt-4'>
        <div className='flex w-full min-h-[400px] pt-5'>
            <div className="left w-[40%] h-full  ">
                <img className='w-full rounded-lg' src={"http://localhost:3000/uploads/"+image}  alt=''/>  
            </div>
            <div className='ml-4'>
                <h3 className='text-3xl font-[500]'>{data ? data.title : ""}</h3>
                <p className='text-[gray] text-[16px] mt-3 mb-3 ' >Created : {data ? (data.Date) : ""}</p>
                <b>Description</b>
                <p className='text-[gray] text-[16px] '>{data ? data.desc : ""}</p>

                  <div className="flex gap-4 mt-6">
                    <button
                      className="btnnormal px-4 py-2 rounded"
                      onClick={() => navigate(`/edit-blog/${data._id}`)}
                    >
                      Edit Blog
                    </button>          
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={handleDelete}
                    >
                      Delete Blog
                    </button>
                  </div>

            </div>

        </div>


        <div className='mt-1'>
            {
                data ? parse(data.content) :  "" 
            }
        </div>


        <div className="mt-6">
          <LikeButton blogId={blogId} userId={userId} />
        </div>

        
        <div className="mt-6">
          <CommentSection blogId={blogId} userId={userId} username={username}/>
        </div>    

    </div>
          

   </>
  )
}

export default SingleBlog



