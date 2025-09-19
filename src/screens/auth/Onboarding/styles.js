import { StyleSheet } from 'react-native';
import { vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        width: vw * 100,
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        paddingBottom: vh * 17,
        // paddingHorizontal: vw * 5,
        // height: vh * 50,
    },
    image: {
        height: vh * 55,
        width: '100%',
    },
    welcomText: {
        width: vw * 80,
        fontSize: vh * 3.54,
        color: Theme.black,
        marginBottom: vh * 1,
    },
    title: {
        fontSize: vh * 1.89,
        // width: vw * 80,
        marginBottom: vh * 1.26,
    },
    description: {
        fontSize: vh * 1.89,
        width: vw * 80,
        color: Theme.grayText,
    },
    buttonContainer: {
        paddingBottom: vh * 2,
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '90%',
        flexDirection: 'row',

    },
    btn: {
        width: vw * 30,
    },
    secondaryBtn: {
        width: vw * 30,
        backgroundColor: Theme.grayBG,
    },
    blackText: {
        color: Theme.black,
    },
    indicatorContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        // width: vw * 80,
        // alignSelf: 'center',
        // marginBottom: vh * 1,
        marginTop: vh * 10,
        position: 'absolute',
        top: vh * 50,
        left: vw * 0,
        // bottom: vh * 0,
        alignSelf: 'center',
        zIndex: 1,
        justifyContent: 'center',
        paddingHorizontal: vw * 5,

    },
    indicator: {
        width: vw * 2,
        height: vw * 2,
        borderRadius: vw * 2.25,
        backgroundColor: '#EDE4DF',
        marginHorizontal: vw * 0.5,
    },
    activeIndicator: {
        backgroundColor: Theme.secondary,
        width: vw * 10,
        height: vw * 2,
    },
});
export default styles;
