import React, { useState } from 'react';
import './likebutton.css';

const LikeButton = ({ isLiked: initialLiked }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={`like-button ${isLiked ? 'liked' : ''}`}
      onClick={handleLikeToggle}
    >
{isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
};

export default LikeButton;
