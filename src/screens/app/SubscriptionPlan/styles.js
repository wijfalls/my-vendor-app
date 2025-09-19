import { StyleSheet } from 'react-native';
import { FontSize, vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

const styles = StyleSheet.create({
    container: {
        height: vh * 55,
    },
    underline: {
        marginBottom: vh * 1.5,
        height: 2,
        width: vw * 10,
        backgroundColor: Theme.secondary
    },
    heading: {
        marginTop: vh * 1.5,

        fontSize: vh * 2
    },
    separator: {
        height: 2,
        width: vw * 90,
        backgroundColor: Theme.border,
        alignSelf: 'center',
        marginVertical: vh * 2
    },
    vector: {
        marginTop: vh * 2,
        width: vw * 100,
        height: vh * 25,
        resizeMode: 'contain',
    }
});
export default styles;