


import React, { useEffect, useState } from 'react';
import { api_base_url } from '../helper';

const CommentSection = ({ blogId, userId, username }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const fetchComments = async () => {
    const res = await fetch(`${api_base_url}/api/auth/getComments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogId }),
    });
    const data = await res.json();
    if (data.success) setComments(data.comments);
  };

  const handleAddComment = async () => {
    if (!text.trim()) return;
    const res = await fetch(`${api_base_url}/api/auth/addComment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogId, userId, username, text }),
    });
    const data = await res.json();
    if (data.success) {
      setText('');
      fetchComments();
    }
  };

  const handleDeleteComment = async (commentId) => {
    const res = await fetch(`${api_base_url}/api/auth/deleteComment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commentId }),
    });
    const data = await res.json();
    if (data.success) {
      fetchComments();
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold mb-2">Comments</h4>
      <div className="flex gap-2 mb-3">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btnnormal" onClick={handleAddComment}>
          Post
        </button>
      </div>
      <div className="space-y-2">
        {comments.map((cmt) => (
          <div key={cmt._id} className="bg-[#1a1a1a] text-white p-3 rounded flex justify-between items-center">
            <div>
              <p>{cmt.text}</p>
              <p className="font-bold">{cmt.username}</p>
            </div>
            <button className="btnnormal ml-4" onClick={() => handleDeleteComment(cmt._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
