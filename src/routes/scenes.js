
"use strict"

import React from "react"
import { Actions, Scene } from "react-native-router-flux"
import HomeContainer from "./Home/containers/HomeContainer"
import AppHeader from "../global/Template/containers/AppHeaderContainer"

export const scenes = Actions.create(
    <Scene key="root" navBar={AppHeader}>
        <Scene key="home" component={HomeContainer} title="Find your cab" initial />
    </Scene>
)
