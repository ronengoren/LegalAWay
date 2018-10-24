"use strict"

import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")
const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
}

export default styles
