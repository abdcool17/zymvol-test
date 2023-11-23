import React from 'react';
import './PostList.css';

const PostList = ({ posts }) => {

  // Added random author avatar, unable to find on reddit endpoint
  const getAuthorAvatarUrl = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    return `https://robohash.org/stefan-${randomNumber}`;
  };

  return (
    <div className="post-list-container">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.selftext}</p>
          <div className="post-author-container">
            <div className="post-author-avatar-container">
              <img
                src={getAuthorAvatarUrl(post.author)}
                alt={`${post.author}'s Avatar`}
                className="post-author-avatar"
              />
            </div>
            <p className="post-author">{post.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;