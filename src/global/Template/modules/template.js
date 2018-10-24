"use strict"

import { actionHandlers } from "./TemplateHandlers"

const initialState = {}
export function templateReducer(state = initialState, action) {
    const handle = actionHandlers[action.type]
    return handle ? handle(state, action) : state
}
