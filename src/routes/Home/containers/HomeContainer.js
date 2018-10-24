
"use strict"

import { connect } from "react-redux"
import Home from "../components/Home"
import {
    getCurrentLocation,
    setPickupLocation,
    setDropLocation,
    bookTaxi,
    cancelBookingTaxi,
    getInputData
} from "../modules/HomeActions"

const mapStateToProps = state => ({
    mapRegion: state.home.mapRegion,
    pickupLocation: state.home.pickupLocation,
    dropoffLocation: state.home.dropoffLocation,
    bookingRecord: state.home.bookingRecord,
    drivers: state.home.drivers,
    taxiType: state.template.selectedTaxiType,
    inputData: state.home.inputData || {}
})

const mapDispatchToProps = {
    getCurrentLocation,
    setPickupLocation,
    setDropLocation,
    bookTaxi,
    cancelBookingTaxi,
    getInputData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
