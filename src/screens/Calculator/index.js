import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../store/index'

import styles from './styles'

import Screen from '../../components/Screen';
import Keyboard from '../../components/Keyboard';

const Calculator = (props) => {

    return (
        <View style={styles.container}>
            <Provider store={store}>
                <Screen />
                <Keyboard />
            </Provider>
        </View>
    );
}

export default Calculator;