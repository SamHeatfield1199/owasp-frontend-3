import { useState, useEffect } from 'react';

import Alert from './utils/alert';
import Reviews from './reviews/reviews';
import useAsyncAction from '../hooks/use-async-action/use-async-action';
import AddReview from './reviews/add-review';

const App = () => {
  const [asyncAction, isLoading] = useAsyncAction();
  const [alerts, setAlerts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const config = {
        get: 'get',
        url: `/review`,
        accessToken: null,
      };

      // const data = await asyncAction(config, setAlerts);
      // if (data.length > 0) setReviews(data);
    };

    if (!reviews.length) getReviews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="reviews mt-b-3">
        <Reviews reviews={reviews} />
        <AddReview setAlerts={setAlerts} setReviews={setReviews} />
      </div>

      <Alert alertsState={[alerts, setAlerts]} />
    </div>
  );
};

export default App;
