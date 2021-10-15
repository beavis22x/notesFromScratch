import {combineReducers, createStore} from "redux";
import itemReducer from "./itemReducer";


const reducers = combineReducers({
    itemReducer,
});


let store = createStore(reducers);

window.store = store;

export default store