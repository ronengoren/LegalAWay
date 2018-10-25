
"use strict"

import { connect } from "react-redux"
import Home from "../components/Home"
import {
    getCurrentLocation,
    setPickupLocation,
    setDropLocation,
    bookLawyer,
    cancelBookingLawyer,
    getInputData
} from "../modules/HomeActions"

const mapStateToProps = state => ({
    mapRegion: state.home.mapRegion,
    pickupLocation: state.home.pickupLocation,
    dropoffLocation: state.home.dropoffLocation,
    bookingRecord: state.home.bookingRecord,
    lawyers: state.home.lawyers,
    lawyerType: state.template.selectedlawyerType,
    inputData: state.home.inputData || {}
})

const mapDispatchToProps = {
    getCurrentLocation,
    setPickupLocation,
    setDropLocation,
    bookLawyer,
    cancelBookingLawyer,
    getInputData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
