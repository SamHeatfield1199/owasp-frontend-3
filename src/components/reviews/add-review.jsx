import React, { useState } from 'react';
import Input from '../utils/form/input';
import { Formik, Form } from 'formik';
import Textarea from '../utils/form/textarea';
import { Rating } from '@material-ui/lab';

const AddReview = ({ setReviews }) => {
  return (
    <Formik
      initialValues={{ username: '', review: '', rating: 2 }}
      onSubmit={async (values) => {
        // async
        const config = {
          method: 'post',
          url: `/review`,
          data: { ...values },
          accessToken: null,
        };

        // const data = await asyncAction(config, setAlerts);
        if (true) setReviews((reviews) => [...reviews, { ...values }]);
      }}>
      {({ isSubmitting, setFieldValue }) => (
        <Form className="reviews__form mt-b-3">
          <div className="label mb-s-1">Rating</div>
          <Rating
            onChange={(event, newValue) => {
              setFieldValue('rating', newValue);
            }}
            defaultValue={2}
            name="rating"
            className="mb-m-1"
            size="large"
          />

          <div className="label mb-s-1">Username</div>
          <Input className="review-form__input input mb-m-1" type="text" name="username" />

          <div className="label mb-s-1">Feedback</div>
          <Textarea className="review-form__input textarea" type="text" name="review" />

          <button
            disabled={isSubmitting}
            type="submit"
            className={`review-form__btn btn btn--primary btn--flat 
            ${isSubmitting ? 'btn--spinner btn--submitted' : ''} mt-m-2`}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddReview;
