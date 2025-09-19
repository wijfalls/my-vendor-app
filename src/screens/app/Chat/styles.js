import { StyleSheet } from 'react-native';
import { vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
        marginTop: vh * 6
    },
    tabStyles: {
        display: 'flex',
        position: 'absolute',
        height: Platform.OS === 'ios' ? vh * 12 : vh * 8,
        borderTopLeftRadius: vw * 5,
        borderTopRightRadius: vw * 5,
        backgroundColor: Theme.primary,
        borderTopColor: Theme.primary,
    },
    titleContainer: {
        height: vh * 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: vw * 80,
    },
    nameStyle: { fontSize: vh * 2, color: Theme.black },
    userStatus: { fontSize: vh * 1.5, color: Theme.placeholder },
    sectionListStyle: { height: vh * 80 },
    contentContainerStyle: { width: '100%', justifyContent: 'flex-end' },
    header: {
        fontSize: vh * 1.6,
        color: 'rgba(0,0,0,0.5)',
    },
    imageContainer: {
        height: vh * 6,
        width: vh * 6,
        borderRadius: (vh * 6) / 2,
        marginHorizontal: vw * 2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    upCommingChatContainer: {
        height: vh * 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    erroMsg: { color: Theme.statusRed, fontSize: vh * 1.6, textAlign: 'center' },
    headerContainer: {
        height: vh * 6,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: vh,
    },
    imageStyle: { height: '100%', width: '100%', resizeMode: 'cover' },
    renderItem: {
        height: vh * 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    onlineContainer: {
        position: 'absolute',
        height: vh * 1.5,
        width: vh * 1.5,
        backgroundColor: Theme.statusGreen,
        borderRadius: (vh * 1.5) / 2,
        top: vh * 0.5,
        left: vw * 9,
        borderWidth: 1.5,
        borderColor: Theme.white,
        zIndex: 999,
    },
    primaryContainer: {
        backgroundColor: Theme.white,
        flex: 1,
        alignItems: 'center',
    },
    textInputContainer: {
        bottom: vh,
        position: 'absolute',
        width: '90%',
        backgroundColor: Theme.cardBG,
        color: Theme.white,
        borderRadius: 5,
        borderColor: Theme.white,

    },
    Containerstyle: { width: '100%', height: vh * 8, marginBottom: 0, alignItems: 'center', justifyContent: 'center', },
    messageContainer: {
        backgroundColor: Theme.lightGray,
        // borderRadius: vh * 2,
        padding: vw * 2,
        borderColor: Theme.border,
        borderWidth: 1,
        borderTopRightRadius: vh * 1.5,
        borderBottomLeftRadius: vh * 1.5,
        borderBottomRightRadius: vh * 1.5,
        marginLeft: vw * 2,
    },
    messageTxt: { fontSize: vh * 1.5, color: Theme.black },
    leftAlignMessageContainer: {
        borderTopRightRadius: 0,
        borderBottomLeftRadius: vh * 1.5,
        backgroundColor: Theme.primary,
        marginRight: vw * 2,
        marginLeft: vw * 2,
    },
    profileContainer: {
        alignItems: 'center'
    },
    profileImage: {
        height: vh * 15,
        width: vh * 15,
        resizeMode: 'cover',
        borderRadius: vh * 10,
        marginTop: vh * -6,
        marginBottom: vh * 1.5,
    },
    headerStyle: {
        paddingTop: 50
    },
    messageTxtRight: {
        color: Theme.white
    }
});
export default styles;