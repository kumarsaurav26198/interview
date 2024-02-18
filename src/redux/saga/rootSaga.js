import { all } from 'redux-saga/effects';
import fetchDataSaga from './fetchDataSaga';
import { postDataSaga } from './postDataSaga';

function* rootSaga() {
    yield all([
      fetchDataSaga(),
      postDataSaga()
    ]);
}
export default rootSaga;
