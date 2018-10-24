"use strict"

import React, { Component } from "react"
import { Text } from "react-native"
import { View, List, ListItem, Left } from "native-base"
import Icon from "react-native-vector-icons/MaterialIcons"

import styles from "./styles"

export const SearchResults = () => {
    return (
        <View style={styles.SearchResultsWrapper}>
            <List>
                <ListItem button avatar>
                    <Left style={styles.leftContainer}>
                        <Icon style={styles.leftIcon} name="location-on" />

                    </Left>
                    <Text>List Item 1</Text></ListItem>
                <ListItem><Text>List Item 2</Text></ListItem>
            </List>
        </View >
    )
}
