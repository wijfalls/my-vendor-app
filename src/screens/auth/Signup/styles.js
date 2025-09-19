import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

export default StyleSheet.create({
    container: {
        marginTop: vh * 0,
        paddingTop: vh * 2,
    },
    logo: {
        height: vh * 13.62,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: vh * 6,
    },
    headingContainer: {
        width: vw * 80,
        marginBottom: vh * 3,
    },
    heading: {
        fontSize: vh * 2.6,
        marginBottom: vh * 0.5,
    },
    underline: {
        height: 2,
        width: vw * 23,
        backgroundColor: Theme.primary,
    },
    subHeading: {
        fontSize: vh * 1.8,
        alignSelf: 'center',
        marginBottom: vh * 3,
    },
    textInput: {
        marginBottom: vh * 1.2,
    },
    siginBtn: {
        marginTop: vh * 1,
        marginBottom: vh * 1.5,
        width: vw * 90,
    },
    bottomContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: vh * 5,
        marginTop: vh * 1,
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh * 8,
    },
    haveAccountText: {
        fontSize: FontSize * 1.2,
    },
    halfInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    halfInput: {
        width: '47%',
    },
    underlineMargin: {
        marginTop: vh * 4,
    },
    flagIcon: {
        height: vh * 2.6,
        width: vh * 2.6,
        marginRight: 0,
    },
});
