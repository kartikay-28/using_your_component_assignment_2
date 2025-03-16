import React from 'react';
import LikeButton from './likebutton';
import './PostCard.css';

const PostCard = ({ profilePic, username, content, isLiked, onLikeToggle }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={profilePic}
          alt={`${username}'s profile`}
          className="profile-pic"
        />
        <h3 className="username">{username}</h3>
      </div>
      <p className="post-content">{content}</p>
      <LikeButton isLiked={isLiked} onLikeToggle={onLikeToggle} />
    </div>
  );
};

export default PostCard;
