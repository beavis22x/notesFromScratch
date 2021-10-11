import {combineReducers, createStore} from "redux";
import itemReducer from "./itemReducer";

const reducers = combineReducers({
    itemReducer,

});


const store = createStore(reducers);

export default store