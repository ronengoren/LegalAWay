"use strict"

import React, { Component } from "react"
import { Button, Label } from "native-base"
import { PropTypes } from "prop-types"
import styles from "./styles"

export default class Booking extends Component {
  onButtonPress = () => {
    this.props.bookLawyer()
  }

  render() {
    const style = { ...styles.container }
    if (this.props.bookingDisabled) {
      style.backgroundColor = styles.disabledState.backgroundColor
    }
    return (
      <Button style={style} disabled={this.props.bookingDisabled} onPress={this.onButtonPress}>
        <Label style={styles.text}>GET A LAWYER NOW</Label>
      </Button>
      // <Button style={style} onPress={this.onButtonPress}>
      //   <Label style={styles.text}>GET A LAWYER NOW</Label>
      // </Button>
    )
  }
}

Booking.propTypes = {
  bookLawyer: PropTypes.func,
  bookingDisabled: PropTypes.bool.isRequired
}
