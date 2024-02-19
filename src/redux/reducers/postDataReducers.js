import { ActionTypes } from '../constants/actiontypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const postDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.POST_DATA_SUCCESS:
    console.log("POST_DATA_SUCCESS", action.payload)
    alert(action?.payload?.message)
      return {
        ...state,
        loading: false,
      };

    case ActionTypes.POST_DATA_FAILURE:
      console.log("POST_DATA_FAILURE", action.payload)
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.UPDATE_STATE:
    console.log("UPDATE_STATE")

      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};