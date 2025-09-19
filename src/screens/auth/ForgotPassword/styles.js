import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

export default StyleSheet.create({
    container: {
        paddingTop: vh * 6,
        alignItems: 'center',
    },
    logo: {
        height: vh * 13.62,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: vh * 15,
    },
    headingContainer: {
        width: vw * 90,
        marginBottom: vh * 3,
    },
    heading: {
        fontSize: vh * 2.6,
        marginBottom: vh * 1,
    },
    underline: {
        height: 2,
        width: vw * 20,
        backgroundColor: Theme.primary,
    },
    subHeading: {
        marginTop: vh * 2,
        fontSize: vh * 1.8,
        width: vw * 90,
    },
    textInput: {
        marginBottom: vh * 1.2,
    },

    siginBtn: {
        marginTop: vh * 1,
        marginBottom: vh * 1.5,
        width: vw * 90,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: vh * 6,
    },
    haveAccountText: {
        fontSize: FontSize * 1.3,
        textDecorationLine: 'none',
    },
});
