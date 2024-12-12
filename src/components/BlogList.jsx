import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} aria-labelledby={`post-title-${post.id}`}>
            <article>
              <h2 id={`post-title-${post.id}`}>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
              <Link to={`/post/${post.id}`} aria-label={`Read more about ${post.title}`}>
                Read More
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogList;
