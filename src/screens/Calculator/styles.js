import { StyleSheet, StatusBar, Platform } from "react-native";

const statusBarHeight = Platform.select({
    ios: 20,
    android: StatusBar.currentHeight
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: statusBarHeight,
    }
});

export default styles;  