// components/LikeButton.jsx
import React, { useEffect, useState } from 'react';
import { api_base_url } from '../helper';

const LikeButton = ({ blogId, userId }) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const fetchLikes = async () => {
    const res = await fetch(`${api_base_url}/api/auth/getLikes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogId }),
    });
    const data = await res.json();
    if (data.success) setCount(data.count);
  };

  const toggleLike = async () => {
    const res = await fetch(`${api_base_url}/api/auth/toggleLike`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogId, userId }),
    });
    const data = await res.json();
    if (data.success) {
      setLiked(data.liked);
      fetchLikes();
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [blogId]);

  return (
    <div className="flex items-center gap-2 mt-4">
      <button onClick={toggleLike} className={`btnnormal ${liked ? 'text-red-500' : ''}`}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <span>{count} Likes</span>
    </div>
  );
};

export default LikeButton;
