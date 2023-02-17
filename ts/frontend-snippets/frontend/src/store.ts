import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/root-reducer";


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;