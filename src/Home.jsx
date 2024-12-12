import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>{t('loading')}</p>;
  }

  return (
    <main>
      <h1>{t('blogTitle')}</h1>
      <ul aria-label={t('blogPostsList')}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} aria-label={`${t('readMoreAbout')} ${post.title}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;