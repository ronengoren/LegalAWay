
"use strict"

import { urls } from "../../../global/urls"

export const SET_PICK_UP_LOCATION = "SET_PICK_UP_LOCATION"
export const SET_DROP_OFF_LOCATION = "SET_DROP_OFF_LOCATION"
export const SET_FARE_STRUCTURE = "SET_FARE_STRUCTURE"
export const BOOK_LAWYER_REQUEST = "BOOK_LAWYER_REQUEST"





function setPickupLocationAction(location) {
    return {
        type: SET_PICK_UP_LOCATION,
        payload: location
    }
}

function setDropLocationAction(location) {
    return {
        type: SET_DROP_OFF_LOCATION,
        payload: location
    }
}

function setFareStructureAction(fare) {
    return {
        type: SET_FARE_STRUCTURE,
        payload: fare
    }
}

function bookLawyerRequestAction(bookingInfo) {
    return {
        type: BOOK_LAWYER_REQUEST,
        payload: bookingInfo
    }
}



function calculateFare() {
    return (dispatch, getState) => {
        const homeState = getState().home
        const { pickupLocation, dropoffLocation } = homeState
        if (pickupLocation && dropoffLocation) {
            const url = urls.distanceMatrix(
                pickupLocation.latitude,
                pickupLocation.longitude,
                dropoffLocation.latitude,
                dropoffLocation.longitude
            )
            fetch(url)
                .then(response => response.json())
                .then(json => json.rows[0].elements[0])
                .then(element => dispatch(setFareStructureAction(element)))
                .catch(error => console.log(error))
        }
    }
}

export function setDropLocation(location) {
    return dispatch => {
        dispatch(setDropLocationAction(location))
        dispatch(calculateFare())
    }
}

export function setPickupLocation(location) {
    return dispatch => {
        dispatch(setPickupLocationAction(location))
        dispatch(calculateFare())
    }
}

// TODO use redux-sage may help to avoid such dispatch chain
export function getCurrentLocation() {
    // Fallback coords at eTown2, Cong Hoa street.
    const fallbackCoords = { latitude: 10.8018791, longitude: 106.6391644 }
    const geoOptions = { timeout: 20000, enableHighAccuracy: false, maximumAge: 1000 }
    return (dispatch, getState) => {
        navigator.geolocation.getCurrentPosition(
            position => dispatch(setPickupLocation(position.coords)),
            error => dispatch(setPickupLocation(fallbackCoords)),
            geoOptions
        )
    }
}

export function bookLawyer() {
    // TODO API call.
    return (dispatch, getState) => {
        const state = getState()
        dispatch(
            bookLawyerRequestAction({
                pickupLocation: state.home.pickupLocation,
                dropoffLocation: state.home.dropoffLocation,
                status: "pending",
                lawyerType: state.template.selectedLawyerType
            })
        )
    }
}

export function cancelBookingLawyer() {
    // TODO API call.
    return dispatch => dispatch(bookLawyerRequestAction(null))
}
