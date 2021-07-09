import {fetchReviewList} from '../../../store/api-actions';

export const getReviews = () => (dispatch, id) => {
  dispatch(fetchReviewList(id));
};
