import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>{t('loading')}</p>;
  }

  if (!post) {
    return <p>{t('postNotFound')}</p>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" aria-label={t('backToHome')}>{t('backToHome')}</Link>
    </article>
  );
};

export default Post;