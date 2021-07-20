import {ActionType} from './action';
import moki from '../mocks/reviews'

const initialState = {
  slideNumber: 0,
  reviews: moki,
  info: 'characteristics',
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SLIDE_SELECTION:
        return {
          ...state,
          slideNumber: action.payload,
        };
      case ActionType.CHOICE__INFORMATION:
        return {
          ...state,
          info: action.payload,
        }
      default:
    }
  return state;
};

export default reduser;
