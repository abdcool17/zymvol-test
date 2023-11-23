import React from 'react';
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list-container">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.selftext}</p>
          <p className="post-author">Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
