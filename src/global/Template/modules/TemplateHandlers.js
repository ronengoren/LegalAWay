"use strict"

import update from "immutability-helper"
import { SET_SELECTED_LAWYER_TYPE } from "./TemplateActions"

export const actionHandlers = {
    SET_SELECTED_LAWYER_TYPE: handleSetSelectedLawyerType
}

function handleSetSelectedLawyerType(state, action) {
    return update(state, {
        selectedLawyerType: {
            $set: action.payload
        }
    })
}
