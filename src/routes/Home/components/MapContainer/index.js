"use strict"

import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { Content } from "native-base"
import MapView from "react-native-maps"
import styles from "./styles"
import { SearchBox } from "../SearchBox"
import { SearchResults } from "../SearchResults"

import Booking from "../Booking"
import { isLocationEquals, lawyerTypes } from "../../../../global"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default class MapContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentWillMount = () => {
		// Resolve lawyer icon as image for custom marker
		lawyerTypes.forEach(type => {
			Icon.getImageSource(type.icon, 25, "orangered").then(image =>
				this.setState({ ...this.state, [type.type]: image })
			)
		})
	}

	renderPickupMarker() {
		const { pickupLocation } = this.props
		if (pickupLocation == null) {
			return null
		}
		return <MapView.Marker coordinate={pickupLocation} pinColor="green" />
	}

	renderDropoffMarker() {
		const { dropoffLocation } = this.props
		if (dropoffLocation == null) {
			return null
		}
		return <MapView.Marker coordinate={dropoffLocation} pinColor="orangered" />
	}

	renderLawyerMarkers() {
		const { lawyerType } = this.props
		if (lawyerType == null || this.state[lawyerType.type] == null) {
			return null
		}
		return this.props.lawyers
			.filter(lawyer => lawyer.lawyerType === lawyerType.type)
			.map(lawyer => (
				<MapView.Marker key={lawyer.id} coordinate={lawyer} image={this.state[lawyerType.type]} />
			))
	}

	render() {
		const { pickupLocation, dropoffLocation, lawyerType, getInputData } = this.props
		const bookingDisabled =
			pickupLocation == null ||
			dropoffLocation == null ||
			isLocationEquals(pickupLocation, dropoffLocation)
		return (
			<Content contentContainerStyle={styles.container}>
				<MapView
					provider={MapView.PROVIDER_GOOGLE}
					region={this.props.mapRegion}
					style={styles.map}>
					{this.renderPickupMarker()}
					{this.renderDropoffMarker()}
					{this.renderLawyerMarkers()}
				</MapView>
				<SearchBox
					setPickupLocation={this.props.setPickupLocation}
					pickupLocation={pickupLocation}
					setDropLocation={this.props.setDropLocation}
					dropoffLocation={dropoffLocation}
				// getInputData={this.getInputData}
				/>
				{/* <SearchResults /> */}
				<Booking bookingDisabled={bookingDisabled} bookLawyer={this.props.bookLawyer} />

			</Content>
		)
	}
}

MapContainer.propTypes = {
	setPickupLocation: PropTypes.func.isRequired,
	// getInputData: PropTypes.func.object,
	bookLawyer: PropTypes.func.isRequired,

	pickupLocation: PropTypes.object,
	setDropLocation: PropTypes.func.isRequired,
	dropoffLocation: PropTypes.object,
	mapRegion: PropTypes.shape({
		latitude: PropTypes.number.isRequired,
		longitude: PropTypes.number.isRequired,
		latitudeDelta: PropTypes.number.isRequired,
		longitudeDelta: PropTypes.number.isRequired
	}),
	lawyers: PropTypes.arrayOf(
		PropTypes.shape({
			lawyerType: PropTypes.string.isRequired,
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired
		})
	),
	lawyerType: PropTypes.shape({
		type: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	})
}

MapContainer.defaultProps = {
	lawyers: []
}
