import React from 'react';
import './likebutton.css';

const LikeButton = ({ isLiked, onLikeToggle }) => {
  return (
    <button
      className={`like-button ${isLiked ? 'liked' : ''}`}
      onClick={onLikeToggle}
    >
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
};

export default LikeButton;
