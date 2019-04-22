import statusReducer from './statusReducer';
import {combineReducers} from "redux";

export default combineReducers({
    status: statusReducer
});
