
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { api_base_url } from '../helper';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editor = useRef(null);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`${api_base_url}/api/auth/getBlog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId: id, token: localStorage.getItem('token') }),
      });
      const data = await res.json();
      if (data.success) {
        setTitle(data.blog.title);
        setDesc(data.blog.desc);
        setContent(data.blog.content);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${api_base_url}/api/auth/editBlog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, desc, content }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Blog updated!');
      navigate(`/blog/${id}`);
    } else {
      alert('Update failed');
    }
  };

  return (
    <div className="p-[100px]">
      <h2 className="text-3xl mb-4">Edit Blog</h2>
      <form onSubmit={handleUpdate}>
        <input
          className="w-full p-2 border mb-4"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border mb-4"
          rows={4}
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <JoditEditor
            className='text-black mt-2'
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
        <button className="btnnormal mt-4" type="submit">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
