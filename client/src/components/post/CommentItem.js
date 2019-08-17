import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment, updateComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div class='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img class='round-image' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class='my-1'>{text}</p>
      <p class='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      {!auth.loading && user === auth.user._id && (
        <Fragment>
          <button
            onClick={e => deleteComment(postId, _id)}
            type='button'
            className='btn btn-danger'
          >
            <i className='fas fa-times' />
          </button>
          <button
            onClick={e => updateComment(postId, _id, text)}
            type='button'
            className='btn'
          >
            <i className='far fa-edit' />
          </button>
        </Fragment>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  auth: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment, updateComment }
)(CommentItem);
