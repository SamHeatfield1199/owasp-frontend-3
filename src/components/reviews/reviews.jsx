import React from 'react';
import Review from './review';

const Reviews = ({ reviews }) => {
  return (
    <>
      <h1 className="reviews__heading">Reviews</h1>
      <img
        className="reviews__img mb-m-1"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/1280px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg"
      />
      {reviews.map((review, i) => (
        <Review review={review} i={i} />
      ))}
    </>
  );
};

export default Reviews;
