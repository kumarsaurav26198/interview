import { ActionTypes } from "../constants/actiontypes";

export const fetchDataRequest = (limit) => {
    console.log("FETCH_DATA_REQUEST action called",limit);
    return {
        type: ActionTypes.FETCH_DATA_REQUEST,
        payload:limit
    };
};

export const fetchDataSuccess = (data) => {
    console.log("FETCH_DATA_SUCCESS action called");
    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        payload:data,
    };
};

export const fetchDataFailure = (error) => {
    console.log("FETCH_DATA_FAILURE action called");
    return {
        type: ActionTypes.FETCH_DATA_FAILURE,
        payload: error,
    };
};
export const updateStatus = () => {
    console.log("UPDATE_STATE action called");
    return {
        type: ActionTypes.UPDATE_STATE,
    };
};
