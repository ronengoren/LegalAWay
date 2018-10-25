"use strict"

import { connect } from "react-redux"
import AppFooter from "../components/AppFooter"
import { setSelectedLawyerTypeAction } from "../modules/TemplateActions"

const mapStateToProps = state => ({
  selectedLawyerType: state.template.selectedLawyerType,
  fareStructure: state.home.fareStructure
})

const mapDispatchToProps = {
  setSelectedLawyerType: type => setSelectedLawyerTypeAction(type)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
