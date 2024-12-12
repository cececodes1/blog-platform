import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  return (
    <article aria-labelledby="post-title">
      <h1 id="post-title">{post.title}</h1>
      <p>{post.body}</p>

      <section aria-labelledby="comments-title">
        <h2 id="comments-title">Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default BlogPost;
