import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Audio } from 'expo-av';

import { updateScreen, addOperation, showResult, clearOperations } from '../../store/actions';
import styles from './styles';

const Button = ({ lightGray, gray, orange, doubled, text, dispatch }) => {

    async function playSound(audioName) {

        const AUDIO_NAME = '../../../assets/sounds/matador.mp3'
        //const soundObject = new Audio.Sound();
        try {
            //await soundObject.loadAsync(require('../../../assets/sounds/matador.mp3'));
            //await soundObject.playAsync();

        } catch (error) {
            if (error) console.log(error);
        }
    }

    function buttonPress(audioName) {
        playSound(audioName);
        if (text == '=') dispatch(showResult());
        else if (text == 'AC') dispatch(clearOperations());
        else dispatch(addOperation(text));
    }

    if (lightGray) {
        return (
            <TouchableOpacity onPress={() => buttonPress('matador.mp3')}>
                <View style={[styles.container, styles.lightGrayContainer]}>
                    <Text style={[styles.textStyle, styles.blackTextStyle]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (orange) {
        return (
            <TouchableOpacity onPress={() => buttonPress('matador.mp3')}>
                <View style={[styles.container, styles.orangeContainer]}>
                    <Text style={[styles.textStyle, styles.whiteTextStyle]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (gray) {
        return (
            <TouchableOpacity onPress={() => dispatch(updateScreen(text))}>
                <View style={[styles.container, styles.grayContainer]}>
                    <Text style={[styles.textStyle, styles.whiteTextStyle]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (doubled) {
        return (
            <TouchableOpacity onPress={() => dispatch(updateScreen(text))}>
                <View style={styles.doubledContainer}>
                    <Text style={[styles.textStyle, styles.whiteTextStyle]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

export default connect()(Button);