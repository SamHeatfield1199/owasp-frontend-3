import React from 'react';
import avatar from './user.jpg';
import { Rating } from '@material-ui/lab';

const Review = ({ review }) => {
  const { username, rating, review: comment } = review;

  return (
    <div className="review card mt-b-3">
      <img className="review__avatar" src={avatar} alt="Hacker" />
      <div className="review__username mt-s-1">{username}</div>
      <Rating defaultValue={rating} className="review__rating mt-s-1" size="small" />
      <p className="review__comment" dangerouslySetInnerHTML={{ __html: comment }} />
    </div>
  );
};

export default Review;
