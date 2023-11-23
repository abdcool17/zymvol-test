import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar/NavBar';
import PostForm from '../Postform/PostForm';
import PostList from '../Postlist/PostList';
import { getPosts } from '../RedditAPI';
import './HomePage.css';

const HomePage = () => {
  const [Search, setSearch] = useState('javascript');
  const [sorting, setSorting] = useState('hot');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(Search, sorting);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [Search, sorting]);

  const handleSortingChange = newSorting => {
    setSorting(newSorting);
  };

  return (
    <div className="container">
      <NavBar options={['javascript', 'java', 'react']} setSearch={setSearch} />
      <PostForm
        Search={Search}
        setSearch={setSearch}
        sorting={sorting}
        handleSortingChange={handleSortingChange}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;