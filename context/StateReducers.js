import { reducerCase } from "./constants";

export const initialState = {
  showSideBer: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    // user info
    case reducerCase.SHOW_SIDE_BER:
      return {
        ...state,
        showSideBer: action.showSideBer,
      };
    default:
      return state;
  }
};
