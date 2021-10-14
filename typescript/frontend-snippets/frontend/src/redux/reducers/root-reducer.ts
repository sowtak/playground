import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;