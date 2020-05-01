import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Routes from './routes/index'

const MainNavigation = (props) => (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
)

export default MainNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});