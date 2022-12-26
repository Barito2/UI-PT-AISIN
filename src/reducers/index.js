import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import LoginReducer from './LoginReducer'

const rootReducer = combineReducers({
    LoginReducer,
    form
});

export default rootReducer