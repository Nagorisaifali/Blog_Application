


import React  from 'react'
import Navbar from '../components/Navbar'
import { api_base_url } from '../helper';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import parse from 'html-react-parser';

const SingleBlog = () => {

    let { blogId } = useParams() ; 

    const [data , setData] = useState(null) ; 

    const [image , setImage] = useState("") ; 


    const getBlog =  async() => {
          try {
              const res = await fetch(`${api_base_url}/api/auth/getBlog`, {
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
            </div>
        </div>

        <div className=''>
            {
                data ? parse(data.content) :  "" 
            }
        </div>

    </div>
   </>
  )
}

export default SingleBlog
