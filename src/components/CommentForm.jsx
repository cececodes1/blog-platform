import React, { useState } from 'react';

const CommentForm = ({ onCommentSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      setError('Name and comment is required.');
      return;
    }
    onCommentSubmit({ name, comment });
    setName('');
    setComment('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="comment-form-title">
      <h2 id="comment-form-title">Add a Comment</h2>
      {error && <div role="alert">{error}</div>}

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-required="true"
      />

      <label htmlFor="comment">Comment</label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        aria-required="true"
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
