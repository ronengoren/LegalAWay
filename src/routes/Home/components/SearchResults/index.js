"use strict"

import React, { Component } from "react"
import { Text } from "react-native"
import { View, List, ListItem } from "native-base"
import styles from "./styles"

export const SearchResults = () => {
    return (
        <View style={styles.SearchResultsWrapper}>
            <List>
                <ListItem><Text>List Item 1</Text></ListItem>
                <ListItem><Text>List Item 2</Text></ListItem>
            </List>
        </View >
    )
}
