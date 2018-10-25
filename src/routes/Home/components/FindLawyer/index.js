"use strict"

import React, { Component } from "react"
import { View, Button, Label } from "native-base"
import { PropTypes } from "prop-types"
import styles from "./styles"
import Icon from "react-native-vector-icons/FontAwesome"
import Spinner from "react-native-spinkit"

export default class FindLawyer extends Component {
    getLocationAsName = location =>
        location.name || location.address || `${location.latitude},${location.longitude}`

    onCancelPress = () => this.props.cancelBookingLawyer()

    render() {
        const { bookingRecord } = this.props
        return (
            <View style={styles.findLawyerContainer}>
                <View style={styles.contentTop}>
                    <Label style={styles.text}>
                        Connecting with nearby {bookingRecord.lawyerType.type} lawyers
          </Label>
                    <Icon style={styles.locationIcon} name="map-marker" />
                    <Label style={styles.pickupText}>
                        {this.getLocationAsName(bookingRecord.pickupLocation)}
                    </Label>
                    <Icon style={styles.toArrow} name="long-arrow-down" />
                    <Spinner style={styles.spinner} isVisible size={180} type="Pulse" color="#FFFFFF" />
                    <Icon style={styles.toArrow} name="long-arrow-down" />
                    <Icon style={styles.locationIcon} name="map-marker" />
                    <Label style={styles.pickupText}>
                        {this.getLocationAsName(bookingRecord.dropoffLocation)}
                    </Label>
                </View>

                <View style={styles.contentBottom}>
                    <Label style={styles.termsText}>By booking you confirm that you accept our T & C</Label>
                    <Button style={styles.cancelBtn} onPress={this.onCancelPress}>
                        <Label style={styles.cancelBtnText}>Cancel</Label>
                    </Button>
                </View>
            </View>
        )
    }
}

FindLawyer.propTypes = {
    bookingRecord: PropTypes.shape({
        pickupLocation: PropTypes.shape({
            name: PropTypes.string,
            address: PropTypes.string,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
        }),
        dropoffLocation: PropTypes.shape({
            name: PropTypes.string,
            address: PropTypes.string,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired
        }),
        status: PropTypes.string.isRequired,
        lawyerType: PropTypes.shape({
            type: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}
