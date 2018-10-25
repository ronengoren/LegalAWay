
"use strict"

import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { Image } from "react-native"
import { Header, Left, Body, Right, Button, Title, Subtitle, Label } from "native-base"
import Icon from "react-native-vector-icons/FontAwesome"

const styles = {
    icon: {
        color: "#fff",
        fontSize: 20
    },
    headerText: {
        color: "#fff",
        fontSize: 12,
        paddingBottom: 20
    }
}
export default class AppHeader extends Component {
    render() {
        // Loading content still visible and we do not want to have header during initiation time.
        if (this.props.appStillLoading || this.props.bookingInProgress) return null

        return (
            <Header style={{ backgroundColor: "#262626" }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon name="bars" style={styles.icon} />
                    </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                    <Title>
                        <Image resizeMode="contain" source={this.props.logo} />
                    </Title>
                    {this.props.lawyerOnTheWay ? (
                        <Subtitle style={styles.headerText}>Your Lawyer on the way.</Subtitle>
                    ) : null}
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon name="gift" style={styles.icon} />
                    </Button>
                </Right>
            </Header>
        )
    }
}

AppHeader.propTypes = {
    logo: PropTypes.number.isRequired,
    lawyerOnTheWay: PropTypes.bool.isRequired,
    appStillLoading: PropTypes.bool.isRequired,
    bookingInProgress: PropTypes.bool.isRequired
}
