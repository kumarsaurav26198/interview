import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants/actiontypes';
import axios from 'axios';
import { fetchDataFailure, fetchDataSuccess, updateStatus } from '../action/fetchDataAction';

function* fetchApi(action) {
  console.log("fetchApi limit check",action.payload);
  try
  {
    const formData = new FormData();
    formData.append('user_id', 108);
    formData.append('offset', action.payload);
    formData.append('type', 'popular');
    const response = yield call(axios.post, 'https://dev3.xicom.us/xttest/getdata.php', formData, {
      headers:{
        'Content-Type': 'multipart/form-data', 
      }
    });
    console.log("fetchApi response====>", response.data);

   if ( response.data?.images?.length > 0) {
      yield put(fetchDataSuccess(response.data));
    } else {
      yield put(updateStatus());
    }

  } catch (error)
  {
    yield put(fetchDataFailure(error));

  }
}
function* fetchDataSaga() {
  yield takeLatest(ActionTypes.FETCH_DATA_REQUEST, fetchApi);
}

export default fetchDataSaga;
