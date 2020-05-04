import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles'

const Screen = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                {props.number}
            </Text>
        </View>
    );
}

function mapStateToProps(state) {
    const { number } = state;

    return { number }
}

export default connect(mapStateToProps)(Screen);