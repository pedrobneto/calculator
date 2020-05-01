import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

import Screen from '../../components/Screen';
import Keyboard from '../../components/Keyboard';

const Calculator = (props) => {
    return (
        <View
            style={styles.container}
        >
            <Screen />
            <Keyboard />
        </View>
    );
}

export default Calculator;