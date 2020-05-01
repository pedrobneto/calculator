import React from 'react';
import { View, Text } from 'react-native';

import Button from '../Button'
import styles from './styles'

const Keyboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Button text='AC' lightGray />
                <Button text='+/-' lightGray />
                <Button text='%' lightGray />
                <Button text='/' orange />
            </View>
            <View style={styles.rowContainer}>
                <Button text='7' gray />
                <Button text='8' gray />
                <Button text='9' gray />
                <Button text='x' orange />
            </View>
            <View style={styles.rowContainer}>
                <Button text='4' gray />
                <Button text='5' gray />
                <Button text='6' gray />
                <Button text='-' orange />
            </View>
            <View style={styles.rowContainer}>
                <Button text='1' gray />
                <Button text='2' gray />
                <Button text='3' gray />
                <Button text='+' orange />
            </View>
            <View style={styles.rowContainer}>
                <Button text='0' gray />
                <Button text='0' gray />
                <Button text='.' gray />
                <Button text='=' orange />
            </View>
        </View>
    );
}

export default Keyboard; 