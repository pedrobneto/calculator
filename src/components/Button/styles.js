import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../../config/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: windowWidth / 5.5,
        width: windowWidth / 5.5,
        borderRadius: windowWidth / 10,
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