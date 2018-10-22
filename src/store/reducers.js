import { combineReducers } from "redux";
import { HomeReducer } from "../routes/Home/modules/home";
// import { TrackDriverReducer as trackDriver } from "../routes/TrackDriver/module/trackDriver";

export const makeRootReducer = () => {
    return combineReducers({
        HomeReducer
        // ,
        // trackDriver
    });
}

export default makeRootReducer;