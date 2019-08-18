import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { updateComment } from '../../actions/post';
import { connect } from 'react-redux';

const UpdateCommentForm = ({
  postId,
  commentId,
  commenttext,
  updateComment
}) => {
  const [text, setText] = useState('');

  /*const onSubmit = e => {
    console.log(document.getElementById('commentform').value);
    e.preventDefault();
    updateComment(
      postId,
      commentId,
      document.getElementById('commentform').value
    );
  };*/
  //console.log(commenttext);
  return (
    <div class='post-form'>
      <div class='bg-primary p'>
        <h3>Update Comment</h3>
      </div>
      <form
        class='form my-1'
        onSubmit={e => {
          e.preventDefault();
          updateComment(postId, commentId, { text });
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder={commenttext}
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' class='btn btn-dark my-1' value='Update Comment' />
      </form>
    </div>
  );
};

UpdateCommentForm.propTypes = {
  postId: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  updateComment: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default connect(
  null,
  { updateComment }
)(UpdateCommentForm);
