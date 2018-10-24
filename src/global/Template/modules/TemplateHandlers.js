"use strict"

import update from "immutability-helper"
import { SET_SELECTED_TAXI_TYPE } from "./TemplateActions"

export const actionHandlers = {
    SET_SELECTED_TAXI_TYPE: handleSetSelectedTaxiType
}

function handleSetSelectedTaxiType(state, action) {
    return update(state, {
        selectedTaxiType: {
            $set: action.payload
        }
    })
}
