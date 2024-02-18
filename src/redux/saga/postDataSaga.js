import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { postDataFailure, postDataSuccess } from '../action/postDataAction';
import { ActionTypes } from '../constants/actiontypes';

function* postData(action) {
    console.log("postData action===>>", action.payload);
    try {
        const response = yield call(axios.post, 'https://dev3.xicom.us/xttest/savedata.php', action.payload,{
            headers:{
                'Content-Type': 'multipart/form-data', 
              }
        });
        console.log("response=====>>:", response?.data); 
        console.log("response message=====>>:", response?.data?.message); 
        console.log("response status =====>>:", response?.data?.status); 
        // yield put(postDataSuccess()); 
    } catch (error) {
        console.log("Error posting data:", error); 
        // yield put(postDataFailure(error));
    }
}

export function* postDataSaga() {
    yield takeLatest(ActionTypes.POST_DATA_REQUEST, postData);
}
