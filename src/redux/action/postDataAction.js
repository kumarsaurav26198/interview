import { ActionTypes } from "../constants/actiontypes";


export const postDataRequest = (data) => ({
  type: ActionTypes.POST_DATA_REQUEST,
  payload: data,
});

export const postDataSuccess = () => ({
  type: ActionTypes.POST_DATA_SUCCESS,
});

export const postDataFailure = (error) => ({
  type: ActionTypes.POST_DATA_FAILURE,
  payload: error,
});
