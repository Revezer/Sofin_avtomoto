import {ActionType} from './action';

const initialState = {
  slideNumber: 0,

};

const reduser = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SLIDE_SELECTION:
        return {
          ...state,
          slideNumber: action.payload,
        };
      default:
    }
  return state;
};

export default reduser;
