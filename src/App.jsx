import React from 'react';
import PostCard from './components/postcard';
import './App.css';

function App() {
  const initialPosts = [
    {
      id: 1,
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      username: 'alice',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profileImage: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg',
      username: 'Sophie',
      content: 'Loving this social media app.',
      isLiked: true,
    },
    {
      id: 3,
      profileImage: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
      username: 'charlie',
      content: 'Just another day...',
      isLiked: false,
    },
  ];

  return (
    <div>
      <h1>Social Media Posts</h1>
      <div>
        {initialPosts.map((post) => (
          <PostCard
            key={post.id}
            profilePic={post.profileImage}
            username={post.username}
            content={post.content}
            isLiked={post.isLiked}  
          />
        ))}
      </div>
    </div>
  );
}

export default App;
