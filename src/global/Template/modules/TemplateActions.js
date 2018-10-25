"use strict"

export const SET_SELECTED_LAWYER_TYPE = "SET_SELECTED_LAWYER_TYPE"

export function setSelectedLawyerTypeAction(lawyerType) {
    return {
        type: SET_SELECTED_LAWYER_TYPE,
        payload: lawyerType
    }
}
