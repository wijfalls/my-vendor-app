import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({

    container: {
        padding: vw * 5,
    },
    contentContainerStyle: {
        // paddingVertical: vh * 1,
        marginTop: vh * 2,
    },
    separator: {
        height: 1,
        backgroundColor: Theme.border,
    },
    marginSearch: {
        marginBottom: 0,
        marginTop: vh * 1,
        // marginVertical: vh * 2
    },
    tabContainer: {
        flexDirection: 'row',
        // marginTop: vh * 2,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
    },
    tab: {
        paddingVertical: vh * 1.2,
        alignItems: 'center',
        width: vw * 45,
    },
    selectedTab: {
        backgroundColor: Theme.primary,
        borderRadius: 8,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    selectedTabText: {
        color: '#FFF',
    },
});

export default styles;