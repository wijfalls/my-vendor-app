import { StyleSheet } from 'react-native';
import { vh, vw } from 'utils/Constants.util';
import { Theme } from 'utils/Theme.util';

export default StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    headingContainer: {
        marginBottom: 30,
    },
    heading: {
        fontSize: 24,
        marginBottom: 10,
    },
    underline: {
        height: 3,
        width: 60,
        backgroundColor: Theme.primary,
        borderRadius: 2,
    },
    textInput: {
        marginBottom: vh * 2,
    },
    sectionLabel: {
        fontSize: 16,
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
    optionButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Theme.primary,
    },
    selectedOption: {
        backgroundColor: Theme.primary,
    },
    optionText: {
        color: Theme.primary,
    },
    selectedOptionText: {
        color: Theme.white,
    },
    submitBtn: {
        marginTop: 20,
        width: vw * 80.8,
        alignSelf: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
    tag: {
        backgroundColor: Theme.primary,
        borderRadius: vh * 10,
        paddingHorizontal: 18,
        paddingVertical: vh * 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // gap: 8,
        width: '100%'
    },
    tagText: {
        color: '#FFFFFF',
    },
    tagIcon: {
        width: 16,
        height: 16,
        tintColor: '#FFFFFF',
    },
    box: {
        borderWidth: 1,
        borderColor: Theme.border,
        borderRadius: vh * 2,
        padding: vh * 2,
        paddingBottom: vh * 0.8,
        backgroundColor: Theme.cardBG,
        marginTop: vh * 2,

    },
    inputContainerStyle: {
        // borderRadius: vh * 1,
        // backgroundColor: Theme.white,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: vh,
        marginLeft: 2,
    }
});