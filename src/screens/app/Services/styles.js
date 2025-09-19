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
        paddingHorizontal: vw,
        paddingVertical: 10,
        marginBottom: 20,
        width: vw * 100,
    },
    list: {
        width: vw * 100,
    },
    name: {
        fontSize: vh * 2.4,
        alignSelf: 'flex-start',
        // marginBottom: vh,
    },
    searchInputContainer: {
        marginBottom: vh * 1,
    },
    addIcon: {
        width: vh * 7,
        height: vh * 7,
        resizeMode: 'cover',
        marginLeft: vw * 1.2,
    },
    row: {
        width: '100%',
        justifyContent: 'space-between',
        // height: vh * 80,
    },
    createBtn: {
        height: vh * 4,
        width: vw * 30,
        borderRadius: vh * 1,
    },
    createBtnText: {
        fontSize: vh * 1.4,
    },
    contentContainer: {
        paddingVertical: 16,
        gap: 16,
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
