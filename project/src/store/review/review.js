import { ActionType } from '../action';

const initialState = {
  reviews: [],
};

export const reviewData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isFetching: true,
      };
    default:
      return state;
  }
};
