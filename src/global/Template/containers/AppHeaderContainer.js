
"use strict"

import { connect } from "react-redux"
import AppHeader from "../components/AppHeader"

const appLogo = require("../../../assets/images/get_a_lawyer_logo.png")

const mapStateToProps = state => ({
    logo: appLogo,
    driverOnTheWay: true,
    appStillLoading: state.home.mapRegion == null,
    bookingInProgress: state.home.bookingRecord != null
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
