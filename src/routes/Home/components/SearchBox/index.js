"use strict"

import React, { Component } from "react"
import { Text } from "react-native"
import { View, Input, InputGroup, Toast, Content, Form, Item, Picker } from "native-base"
import styles from "./styles"
import Icon from "react-native-vector-icons/FontAwesome"
import PropTypes from "prop-types"
import RNGooglePlaces from "react-native-google-places"
import { showError } from "../../../../global"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export class SearchBox extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected2: undefined
    //     };
    // }
    // onValueChange2(value) {
    //     this.setState({
    //         selected2: value
    //     });
    // }


    choosePickupLocation = () => {
        const latLngBounds = {}
        const { pickupLocation } = this.props
        if (pickupLocation) {
            latLngBounds.latitude = pickupLocation.latitude
            latLngBounds.longitude = pickupLocation.longitude
        }
        this.pickALocation(latLngBounds, this.props.setPickupLocation)
    }

    // chooseLawyerType = () => {
    //     const latLngBounds = {}
    //     const { dropoffLocation } = this.props
    //     if (dropoffLocation) {
    //         latLngBounds.latitude = dropoffLocation.latitude
    //         latLngBounds.longitude = dropoffLocation.longitude
    //     }
    //     this.pickALocation(latLngBounds, this.props.setDropLocation)
    // }



    chooseDropoffLocation = () => {
        const latLngBounds = {}
        const { dropoffLocation } = this.props
        if (dropoffLocation) {
            latLngBounds.latitude = dropoffLocation.latitude
            latLngBounds.longitude = dropoffLocation.longitude
        }
        this.pickALocation(latLngBounds, this.props.setDropLocation)
    }

    pickALocation(latLngBounds = {}, successCallback) {
        latLngBounds.radius = 0.1
        RNGooglePlaces.openPlacePickerModal()
            .then(place => successCallback(place))
            .catch(error => showError(error.message))
    }

    getLocationDisplayText = location => {
        return location
            ? location.name || location.address || `${location.latitude},${location.longitude}`
            : ""
    }

    // getLawyerDisplayText = input => {
    //     return input
    //     ""
    // }



    render() {
        const dropoffText = this.getLocationDisplayText(this.props.dropoffLocation)
        // const inputText = this.getLawyerDisplayText(this.props.handleInput)
        const pickupText = this.getLocationDisplayText(this.props.pickupLocation)
        return (
            <View style={styles.searchBox}>
                <View style={styles.inputWrapper}>
                    <InputGroup>
                        <Icon name="search" size={15} color="green" />
                        <Input
                            style={styles.inputSearch}
                            placeholder="Where are you?"
                            value={pickupText}
                            onFocus={this.choosePickupLocation}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Icon name="search" size={15} color="orangered" />
                        <Input
                            style={styles.inputSearch}
                            placeholder="Choose Lawyer"
                            value={dropoffText}
                            onFocus={this.chooseDropoffLocation}
                        />
                        {/* <Content>
                            <Form>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="Select laywer type"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Divorce attorney" value="Divorce attorney" />
                                        <Picker.Item label="Bankruptcy lawyer" value="Bankruptcy lawyer" />
                                        <Picker.Item label="Corporate lawyer" value="Corporate lawyer" />
                                        <Picker.Item label="Civil Rights lawyer" value="Civil Rights lawyer" />
                                        <Picker.Item label="DUI/DWI attorney" value="DUI/DWI attorney" />
                                        <Picker.Item label="Employment law lawyer" value="Employment law lawyer" />
                                        <Picker.Item label="Estate law attorneys" value="Estate law attorneys" />
                                        <Picker.Item label="Divorce lawyer" value="Divorce lawyer" />
                                        <Picker.Item label="All" value="All" />

                                    </Picker>
                                </Item>
                            </Form>
                        </Content> */}
                    </InputGroup>

                </View>
            </View>
        )
    }
}

SearchBox.propTypes = {

    setPickupLocation: PropTypes.func.isRequired,
    // getInputData: PropTypes.func.isRequired,
    pickupLocation: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
    }),
    setDropLocation: PropTypes.func.isRequired,
    dropoffLocation: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
    })
}

export default SearchBox
