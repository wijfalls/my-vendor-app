import fonts from 'assets/fonts';
import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

export default StyleSheet.create({
    container: {
        paddingTop: vh * 4,
        alignItems: 'center',
    },
    logo: {
        height: vh * 15,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: vh * 6,
    },
    headingContainer: {
        width: vw * 90,
        marginBottom: vh * 3,
    },
    heading: {
        fontSize: vh * 2.6,
        marginBottom: vh * 0.5,
        textTransform: 'capitalize',
    },
    subHeading: {
        fontSize: vh * 1.8,
        alignSelf: 'center',
        marginBottom: vh * 6,
    },
    textInput: {
        marginBottom: vh * 1.2,
    },
    rememberMe: {
        alignSelf: 'flex-start',
    },
    forgotPasswodContainer: {
        // alignSelf: 'flex-end',
        // marginBottom: vh * 4,

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw * 90,
    },
    siginBtn: {
        marginTop: vh * 1,
        marginBottom: vh * 1.5,
        width: vw * 90,
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh * 4,
    },
    haveAccountText: {
        fontSize: FontSize * 1.2,
    },
    underline: {
        height: 2,
        width: vw * 22,
        backgroundColor: Theme.primary,
    },
    forgotpassText: {
        textDecorationLine: 'none',
        color: Theme.black,
    },
    socialBtn: {

        padding: vw * 2.5,
        borderRadius: vh * 5,
        backgroundColor: Theme.cardBG
    },
    socialIcon: {
        height: vh * 4,
        width: vh * 4,
        resizeMode: 'contain',
    },
    socialContainer: {
        // marginTop: vh * 2,
        flexDirection: 'row',
        gap: vw * 5,
    },
    check: {
        height: vh * 1,
        width: vh * 1,
        tintColor: Theme.primary,
        resizeMode: 'contain',
    },
    checkbox: {
        borderWidth: 1,
        borderColor: Theme.primary,
        padding: 2,
        height: vh * 1.5,
        width: vh * 1.5,
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: vw,
    },
    rememberMeContainer: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vh * 3,
    },
    forgotPasswordText: {

        alignSelf: 'flex-start',
    },
    line: {
        height: 1,
        width: vw * 28,
        backgroundColor: Theme.grayText,
        alignSelf: 'center',
        // marginVertical: vh * 2,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: vh * 2,
        width: '100%'
    },
    colorWhite: {
        marginVertical: vh,
        color: Theme.grayText,
    },
    guest: {
        marginTop: vh * 4,
        fontSize: vh * 2,
    }
});
