
import { NameSpace } from '../root-reducer';

export const getReviews = (state) => state[NameSpace.REVIEW].reviews;
