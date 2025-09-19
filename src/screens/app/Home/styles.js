import { StyleSheet } from 'react-native';
import { vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    partyRow: {
        marginTop: 10,
        justifyContent: 'space-between',
    },
    carouselIndicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 20,
    },
    carouselIndicator: {
        height: 10,
        width: 18,
        backgroundColor: Theme.textBtn + '33',
        borderRadius: 10,
    },
    activeIndicator: {
        backgroundColor: Theme.primary,
        width: 40,
    },
    listContainer: {
        gap: 20,
        paddingVertical: 10,
        marginBottom: 20,
    },
    list: {
        width: '100%',

    },
    name: {
        fontSize: vh * 2.4,
        // marginBottom: vh,
        color: Theme.white,
        width: vw * 60,

    },
    searchInputContainer: {
        marginTop: vh * 1,
        marginBottom: vh * 0,
    },
    addIcon: {
        width: vh * 7,
        height: vh * 7,
        resizeMode: 'cover',
        marginLeft: vw * 1.2,
    },
    postCard: {
        width: vw * 90,
        height: vh * 20,
        borderRadius: vh * 2,
        marginBottom: vh * 2,
        resizeMode: 'contain',
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: vw * 8,
        flexDirection: 'row',
    },
    cardContainer: {
        // width: vw * 90,
        height: vh * 20,
        borderRadius: vh * 2,
        marginBottom: vh * 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: vw * 4,
        flexDirection: 'row',
    },
    text: {
        color: Theme.white,
        width: vw * 50,
    },
    postBtn: {
        width: vw * 28,
        height: vh * 5,
        backgroundColor: Theme.white,
    },
    title: {
        color: Theme.primary,
    },
    row: {
        width: '100%',
        justifyContent: 'space-between',
        // height: vh * 80,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 2,
        width: vw * 90,
        backgroundColor: Theme.cardBG,
        paddingHorizontal: vw * 5,
        borderRadius: vh * 2,
        paddingVertical: vh * 2,
        justifyContent: 'space-between',
        marginVertical: vh * 1.5,
    },
    profileHeading: {
        fontSize: vh * 2.4,
    },
    completeBtn: {
        width: vw * 32,
        height: vh * 5,
        marginTop: vh * 2,
    },
    progress: {
        width: vh * 10,
        height: vh * 10,
        borderRadius: vh * 1,
        marginTop: vh * 2,
    },
    header: {
        marginVertical: vh * 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: vw * 5,
        // marginBottom: 16,
    },
    searchInputContainer: {
        marginBottom: vh * 0.5,
        width: '82%',
        height: vh * 6,
    },
    filterIcon: {
        width: vh * 6,
        height: vh * 6,
    },
    inputContainerStyle: {
        height: vh * 6,
        borderWidth: 0,
    },
});
export default styles;
