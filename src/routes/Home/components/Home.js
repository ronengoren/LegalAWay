
"use strict"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import MapContainer from "./MapContainer"
import { Container } from "native-base"
import AppFooter from "../../../global/Template/containers/AppFooterContainer"
import LoadingIndicator from "./LoadingIndicator"
import FindLawyer from "./FindLawyer"

export default class Home extends Component {
    componentDidMount() {
        this.props.getCurrentLocation()
    }

    renderHome() {
        return (
            <Container>
                <MapContainer {...this.props} />
                <AppFooter />
            </Container>
        )
    }

    renderLoading() {
        return <LoadingIndicator />
    }

    renderBookingRequest() {
        return (
            <FindLawyer
                bookingRecord={this.props.bookingRecord}
                cancelBookingLawyer={this.props.cancelBookingLawyer}
            />
        )
    }

    render() {
        if (this.props.bookingRecord) {
            return this.renderBookingRequest()
        }
        if (this.props.mapRegion == null) {
            return this.renderLoading()
        }
        return this.renderHome()
    }
}

Home.propTypes = {
    getCurrentLocation: PropTypes.func.isRequired,
    setPickupLocation: PropTypes.func.isRequired,
    setDropLocation: PropTypes.func.isRequired,
    bookLawyer: PropTypes.func.isRequired,
    cancelBookingLawyer: PropTypes.func.isRequired,
    pickupLocation: PropTypes.object,
    dropoffLocation: PropTypes.object,
    mapRegion: PropTypes.object,
    bookingRecord: PropTypes.object,
    lawyers: PropTypes.array,
    lawyerType: PropTypes.object,
    // getInputData: PropTypes.func.object
}
