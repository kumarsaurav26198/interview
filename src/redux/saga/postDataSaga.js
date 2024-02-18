import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { postDataFailure, postDataSuccess } from '../action/postDataAction';
import { ActionTypes } from '../constants/actiontypes';
import RNFetchBlob from "rn-fetch-blob";

function* postData(action) {
    console.log("postData action===>>", action.payload);
    try {
        const { firstName, lastName, email, number, user_image } = action.payload;

        const response = yield RNFetchBlob.fetch("GET", user_image);
        const base64 = yield response.base64();

        const filePath = RNFetchBlob.fs.dirs.DocumentDir + '/image.jpg';
        yield RNFetchBlob.fs.writeFile(filePath, base64, 'base64');

        const imageFilePath = {
            uri: 'file://' + filePath,
            type: 'image/jpeg',
            name: 'image.jpg',
        };

        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('phone', number);
        formData.append('user_image', imageFilePath);

        const postResponse = yield call(axios.post, 'https://dev3.xicom.us/xttest/savedata.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        console.log("response=====>>:", postResponse?.data);
        console.log("response message=====>>:", postResponse?.data?.message);
        console.log("response status =====>>:", postResponse?.data?.status);

        yield put(postDataSuccess( postResponse?.data));
    } catch (error) {
        console.log("Error posting data:", error);
        yield put(postDataFailure(error));
    }
}

export function* postDataSaga() {
    yield takeLatest(ActionTypes.POST_DATA_REQUEST, postData);
}
