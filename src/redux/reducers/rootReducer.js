import {combineReducers} from 'redux'
import { fetchDataReducer } from './fetchDataReducer';


export default combineReducers({
    fetchDataReducer:fetchDataReducer
})