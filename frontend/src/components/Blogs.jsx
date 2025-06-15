
import React from 'react'
import Blog from './Blog'
import {api_base_url} from '../helper' ; 
import { useEffect  , useState} from 'react';

const Blogs = () => {

  const [data, setData] = useState(null); 

  const getBlogs =  async() => {
      try {
          const res = await fetch(`${api_base_url}/api/auth/getBlogs`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
              token : localStorage.getItem("token") , 
             })
            }).then((res) => res.json()).then((data) =>{
              if(data.success){
                  setData(data.blogs)
              }else {
                alert(data.msg) ; 
              }
            })
          
          } catch (err) {
            console.error(err);
          }
  };

  useEffect(() => {
    getBlogs() ; 
  },[]) ; 

  return (
    <>
        <div className="blogs px-[100px] mt-4 mb-5">
            <h3 className='text-2xl'> Latest Blogs</h3>

            <div className="blogsCon grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {
              data && data.length > 0 ? (
                data.map((item, index) => (
                  <Blog key={item._id || index} data={item} />
                ))
              ) : (
                <p className="text-white">No Blogs Found!</p>
              )
            }
          </div>

        </div>
    </>
  )
}

export default Blogs
