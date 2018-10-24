"use strict"

import { combineReducers } from "redux"
import { homeReducer } from "../routes/Home/modules/home"
import { templateReducer } from "../global/Template/modules/template"

export const makeRootReducer = () => {
    return combineReducers({ home: homeReducer, template: templateReducer })
}

export default makeRootReducer
