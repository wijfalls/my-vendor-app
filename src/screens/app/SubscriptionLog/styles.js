
import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        alignItems: 'center',
        marginTop: vh * 2
    },
    heading: { alignSelf: "flex-start", fontWeight: '700', fontSize: FontSize * 1.4, marginLeft: vw * 3, marginBottom: vh },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vh * 2,
        paddingHorizontal: vw * 5,
    },
    headerBtn: {
        width: vw * 42,
        height: vh * 4,
        backgroundColor: Theme.secondary,
    },
    headerBtnTitle: {
        fontSize: FontSize,
    },
    inactiveTabBtn: {
        backgroundColor: Theme.black,
    },
    contentContainerStyle: {
        marginTop: vh * 1.2,
        alignItems: 'center',
    },
    multilineInput: {
        height: vh * 10,
    },
    reviewContainer: {
        paddingHorizontal: vw * 5,

    }
});
export default styles;
