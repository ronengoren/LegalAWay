"use strict"

import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")
const styles = {
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#262626"
    },
    text: {
        color: "white"
    }
}

export default styles
