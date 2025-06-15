import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar';
import JoditEditor from "jodit-react"  ; 
import { api_base_url } from '../helper';

const UploadBlog = () => {

    const [isAdmin , setIsAdmin] = useState(false) ; 
    const [adminSecret, setAdminSecret] = useState("") ; 
    const [error, setError] = useState("") ; 
    const [image , setImage] = useState("") ; 

    const [title , setTitle] = useState("") ; 
    const [desc , setDesc] = useState("") ; 


    const editor = useRef(null) ; 
    const [content, setContent] = useState("") ; 



    const checkAdmin  = () => {
        if(adminSecret !== ""){
            if(adminSecret === "admin1234"){
                setIsAdmin(true) ; 
            }else{
                setError("Invalid Admin Secret !") ; 
            }
        }else{
            setError("Please Provide Admin Secret !") ; 
        }
    }

    const submitForm = async (e) => {
  e.preventDefault();

    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("content", content);
        formData.append("token", localStorage.getItem("token"));
        formData.append("file", image); // "file" must match multer field name

        const res = await fetch(`${api_base_url}/api/auth/uploadBlog`, {
            method: "POST",
            body: formData, // No headers! Let browser set it
        });

        const data = await res.json();

        if (data.success) {
            alert("Blog Created successfully");
            setTitle("");
            setDesc("");
            setContent("");
            setImage("") ; 
            setError("");
        } else {
            setError(data.msg);
        }
     } catch (err) {
        console.log("UPLOAD ERROR:", err);
        setError("Something went wrong while uploading");
  }
};


  return (
    <>
        {
            isAdmin == false  ? 
            <>
                <Navbar/>
                <div className="con flex items-center justify-center flex-col h-screen">
                    <div  className='w-[25vw] h-[fit] flex flex-col bg-[#0F0E0E] rounded-xl p-[20px] '>
                    <h3 className='text-2xl mb-2 '>Login to upload blog</h3>
                    <div className="inputBox mt-2 mb-3 ">
                        <input onChange={(e) => {setAdminSecret(e.target.value)}} value={adminSecret} type="text" placeholder='Enter admin secret' className='h-[40px]' />
                    </div>
                    <p className='text-red-500 text-[16px]'>{error}</p>
                    <button className="btnnormal mt-3" onClick={() => {checkAdmin()}}>Login</button>
                    </div>
                </div>
            </>
            : 
            <>
                <Navbar/>
                <div className='px-[100px]'>
                    <h3>Upload Blog</h3>
                    <form  onSubmit={submitForm}>
                        <div className="inputBox mt-3">
                            <input type="text" placeholder='Enter Title.....' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>

                        <div className="inputBox mt-3">
                            <textarea placeholder='Enter Description.....'  onChange={(e) => setDesc(e.target.value)}  value={desc}></textarea>
                        </div>

                        <JoditEditor
                            ref={editor}
                            className='text-black mt-2'
                            value={content}
                            tabIndex={1} // tabIndex of textarea
                            // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {setContent(newContent)}}
		                />

                        <input className='my-3'  type="file" onChange={(e) => setImage(e.target.files[0])}   id='file'/>
                        
                        <button className="btnnormal mt-3">
                            Create Blog
                        </button>
                        
                    </form>
                </div>
            </>
        }
    </>
  )
}

export default UploadBlog
