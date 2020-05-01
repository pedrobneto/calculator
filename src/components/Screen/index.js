import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

const Screen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                60
            </Text>
        </View>
    );
}

export default Screen;