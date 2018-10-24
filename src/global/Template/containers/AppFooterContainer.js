"use strict"

import { connect } from "react-redux"
import AppFooter from "../components/AppFooter"
import { setSelectedTaxiTypeAction } from "../modules/TemplateActions"

const mapStateToProps = state => ({
  selectedTaxiType: state.template.selectedTaxiType,
  fareStructure: state.home.fareStructure
})

const mapDispatchToProps = {
  setSelectedTaxiType: type => setSelectedTaxiTypeAction(type)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
