import React, { useState } from 'react';
import Input from '../utils/form/input';
import { Formik, Form, Field } from 'formik';
import useAsyncAction from '../../hooks/use-async-action/use-async-action';
import Textarea from '../utils/form/textarea';
import { Rating } from '@material-ui/lab';



const SignIn = ({ setAlerts, setAccessToken }) => {
  const [asyncAction] = useAsyncAction();
  const [review, setReview] = useState()

  return (

    <Formik
      initialValues={{ username: '', review: '', rating: 2 }}
      onSubmit={async (values) => {
        console.log(typeof (values))
        setReview(values)
        console.log(review)
        // async
        const config = {
          method: 'post',
          url: `/auth/sign-in`,
          data: { ...values },
        };

        // const data = await asyncAction(config, setAlerts);

        // if (data) setAccessToken(data.accessToken);
      }}>

      {({ isSubmitting, setFieldValue }) => (


        <Form className="sign-in">
          <div>{review}</div>
          <h1 className="sign-in__heading">Review</h1>
          <img className="sign-in__img mb-m-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/1280px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg" />
          <div onMouseEnter={() => { }} onMouseLeave={() => { }} className="label mt-s-1">Rating</div>
          <Rating
            onChange={(event, newValue) => {
              setFieldValue("rating", newValue);
            }}
            name="rating"
            className="mb-m-1"
            size="large"
          />

          <div className="label mb-s-1">Username</div>
          <Input className="sign-in__input input mb-m-1" type="text" name="username" />

          <div className="label mb-s-1">Feedback</div>
          <Textarea className="sign-in__input textarea" type="text" name="review" />

          <button
            disabled={isSubmitting}
            type="submit"
            className={`sign-in__btn btn btn--primary btn--flat 
            ${isSubmitting ? 'btn--spinner btn--submitted' : ''} mt-m-2`}>
            Send
          </button>
        </Form>

      )}
    </Formik>
  );
};

export default SignIn;
