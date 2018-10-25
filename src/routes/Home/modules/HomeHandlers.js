"use strict"

import update from "immutability-helper"
import {
    SET_PICK_UP_LOCATION,
    SET_DROP_OFF_LOCATION,
    SET_FARE_STRUCTURE,
    BOOK_LAWYER_REQUEST
} from "./HomeActions"
import { getRegionFromCoordinates, lawyerTypes } from "../../../global"

export const actionHandlers = {
    SET_PICK_UP_LOCATION: handleSetPickupLocation,
    SET_DROP_OFF_LOCATION: handleSetDropLocation,
    SET_FARE_STRUCTURE: handleSetFareStructure,
    BOOK_LAWYER_REQUEST: handlebookLawyerRequest,
    GET_INPUT: handleGetInput
}

function handleGetInput(state, action) {
    const { key, value } = action.payload
    return update(state, {
        inputData: {
            [key]: {
                $set: value
            }
        }
    })
}

function handleSetPickupLocation(state, action) {
    const pickupLocation = action.payload
    const dropoffLocation = state.dropoffLocation

    // As we will not integrate with any server so ,
    // just random some lawyers when users set pickup
    const randomLawyerCount = Math.round(Math.random() * 20)
    const lawyers = []
    for (let i = 0; i < randomLawyerCount; i++) {
        const randomLawyerType = Math.round(Math.random() * 1000) % lawyerTypes.length
        lawyers.push({
            id: i,
            lawyerType: lawyerTypes[randomLawyerType].type,
            latitude: pickupLocation.latitude + (Math.random() - Math.random()) / 50,
            longitude: pickupLocation.longitude + (Math.random() - Math.random()) / 50
        })
    }

    return update(state, {
        pickupLocation: {
            $set: pickupLocation
        },
        mapRegion: {
            $set: getRegionFromCoordinates([pickupLocation, dropoffLocation])
        },
        lawyers: {
            $set: lawyers
        }
    })
}

function handleSetDropLocation(state, action) {
    const pickupLocation = state.pickupLocation
    const dropoffLocation = action.payload
    return update(state, {
        dropoffLocation: {
            $set: dropoffLocation
        },
        mapRegion: {
            $set: getRegionFromCoordinates([pickupLocation, dropoffLocation])
        }
    })
}

function handleSetFareStructure(state, action) {
    return update(state, {
        fareStructure: {
            $set: action.payload
        }
    })
}



function handlebookLawyerRequest(state, action) {
    return update(state, {
        bookingRecord: {
            $set: action.payload
        }
    })
}
