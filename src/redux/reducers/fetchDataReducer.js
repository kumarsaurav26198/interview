import { ActionTypes } from '../constants/actiontypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
    console.log("FETCH_DATA_REQUEST", action.payload)
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.FETCH_DATA_SUCCESS:
      console.log("FETCH_DATA_SUCCESS fetchDataReducer",action.payload)
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case ActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.UPDATE_STATE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};