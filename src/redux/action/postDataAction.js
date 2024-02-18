import { ActionTypes } from "../constants/actiontypes";


export const postDataRequest = (data) => ({
  type: ActionTypes.POST_DATA_REQUEST,
  payload: data,
});

export const postDataSuccess = (status) => ({
  type: ActionTypes.POST_DATA_SUCCESS,
  payload:status
});

export const postDataFailure = (error) => ({
  type: ActionTypes.POST_DATA_FAILURE,
  payload: error,
});
