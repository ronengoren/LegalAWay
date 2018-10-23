import React from "react";
import { View } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// import SearchBox from "../SearchBox";
// import SearchResults from "../SearchResults";

import styles from "./MapContainerStyles.js";

export const MapContainer = ({ 
		region
		// getInputData,
		// toggleSearchResultModal,
		// getAddressPredictions,
		// resultTypes,
		// predictions,
		// getSelectedAddress,
		// selectedAddress,
		// carMarker,
		// nearByDrivers
	})=>{

	// const { selectedPickUp, selectedDropOff } = selectedAddress || {};

	return(
		<View style={styles.container}>
	
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>

				{/* { selectedPickUp &&
					<MapView.Marker
						coordinate={{latitude:selectedPickUp.latitude, longitude:selectedPickUp.longitude}}
						pinColor="green"

					/>	
				}
				{ selectedDropOff &&
					<MapView.Marker
						coordinate={{latitude:selectedDropOff.latitude, longitude:selectedDropOff.longitude}}
						pinColor="blue"

					/>	
				}

				{
					nearByDrivers && nearByDrivers.map((marker, index)=>
						<MapView.Marker
							key={index}
							coordinate={{latitude:marker.coordinate.coordinates[1], longitude:marker.coordinate.coordinates[0] }}
							image={carMarker}
						/>	
					)
				} */}


			{/* </MapView>

			<SearchBox 
				getInputData={getInputData}
				toggleSearchResultModal={toggleSearchResultModal}
				getAddressPredictions={getAddressPredictions}
				selectedAddress={selectedAddress}
			/>
			{ (resultTypes.pickUp || resultTypes.dropOff) &&
			<SearchResults predictions={predictions} getSelectedAddress={getSelectedAddress}/>
			} */}
		</View>
	)
}

export default MapContainer;