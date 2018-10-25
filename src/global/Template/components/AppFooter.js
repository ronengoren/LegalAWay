"use strict"

import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { Text } from "react-native"
import { Footer, FooterTab, Button } from "native-base"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { isFareStructureEquals } from "../../../global"
import { lawyerTypes } from "../../../global"

const styles = {
    footerContainer: {
        // marginTop: 10,
        backgroundColor: "#fff"
    },
    type: {
        fontSize: 12
    },
    title: {
        fontSize: 6
    }
}

export default class AppFooter extends Component {
    onLawyerTypeSelected = lawyerType => {
        if (lawyerType.type !== this.props.selectedLawyerType.type) {
            this.props.setSelectedLawyerType(lawyerType)
        }
    }

    componentDidMount() {
        this.props.setSelectedLawyerType(lawyerTypes[0])
    }

    formatTabElement(tabInfo, style = {}) {
        // Clone the styles so that customization will not impacted to template
        const elementStyle = { ...style }
        const tabIsActive = this.props.selectedLawyerType === tabInfo
        elementStyle.color = tabIsActive ? "#262626" : "grey"

        return elementStyle
    }

    renderTab(tabInfo) {
        // FIXME using anonymous function is not the good practices,
        // are there anyway to pass arguments via onPress event?
        const subTitle = tabInfo.pricing ? `$${tabInfo.pricing}` : tabInfo.title
        return (
            <Button vertical key={tabInfo.type} onPress={() => this.onLawyerTypeSelected(tabInfo)}>
                <Icon size={20} name={tabInfo.icon} style={this.formatTabElement(tabInfo)} />
                <Text style={this.formatTabElement(tabInfo, styles.type)}>{tabInfo.type}</Text>
                <Text style={this.formatTabElement(tabInfo, styles.title)}>{subTitle}</Text>
            </Button>
        )
    }

    render() {
        return (
            <Footer >
                <FooterTab style={styles.footerContainer}>
                    {lawyerTypes.map(type => this.renderTab(type))}
                </FooterTab>
            </Footer>
        )
    }

    componentWillUpdate = (nextProps, nextState) => {
        // Recalculate price when new fare structure is applied.
        const newFare = nextProps.fareStructure
        if (!isFareStructureEquals(this.props.fareStructure, newFare)) {
            lawyerTypes.forEach(type => {
                // Travel < 5km will be priced as 5 km.
                const distance = Math.max(3, newFare.distance.value / 1000)
                const standardDuration = distance * type.standardDurationPerKm
                const durationRate = newFare.duration.value / standardDuration
                const price = durationRate * type.pricePerKm * distance
                type.pricing = Math.round(price * 100) / 100
            })
        }
    }
}

AppFooter.propTypes = {
    setSelectedLawyerType: PropTypes.func.isRequired,
    selectedLawyerType: PropTypes.object,
    fareStructure: PropTypes.shape({
        distance: PropTypes.shape({
            value: PropTypes.number.isRequired
        }).isRequired,
        duration: PropTypes.shape({
            value: PropTypes.number.isRequired
        }).isRequired
    })
}
