import {combineReducers} from 'redux'
import { fetchDataReducer } from './fetchDataReducer';
import { postDataReducers } from './postDataReducers';


export default combineReducers({
    fetchDataReducer:fetchDataReducer,
    postDataReducers:postDataReducers
})