import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../../config/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: windowWidth / 5.5,
        width: windowWidth / 5.5,
        borderRadius: windowWidth / 11,
        alignItems: 'center',
        justifyContent: 'center',
    },

    lightGrayContainer: {
        backgroundColor: colors.lightGray,
    },

    grayContainer: {
        backgroundColor: colors.gray,
    },

    orangeContainer: {
        backgroundColor: colors.orange,
    },

    doubledContainer: {
        height: windowWidth / 5.5,
        width: windowWidth / 2.25,
        borderRadius: windowWidth / 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colors.gray,
        paddingLeft: (windowWidth / 5.5) / 2 - RFPercentage(1),
    },

    textStyle: {
        fontSize: RFPercentage(5),
    },

    blackTextStyle: {
        color: colors.black,
    },

    whiteTextStyle: {
        color: 'white',
    }
});

export default styles;