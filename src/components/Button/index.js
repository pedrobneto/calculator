import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

import styles from './styles';

const Button = ({ lightGray, gray, orange, doubled, text }) => {

    if (lightGray) {
        return (
            <TouchableOpacity>
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
            <TouchableOpacity>
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
            <TouchableOpacity>
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
            <View style={styles.doubledContainer}>
                <Text style={[styles.textStyle, styles.whiteTextStyle]}>
                    {text}
                </Text>
            </View>
        )
    }

}

export default Button;