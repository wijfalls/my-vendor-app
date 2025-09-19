import HeaderText from 'components/HeaderText';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
const ScreenWrapper = ({heading, style, children, headerRight}, props) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView
                style={[styles.container]}
                contentContainerStyle={[style]}
                {...props}>
                {heading && (
                    <HeaderText heading={heading} headerRight={headerRight} />
                )}
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: vh,
    },
    header: {
        padding: vh * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: FontSize * 2,
        color: Theme.textBtn,
        marginTop: vh * 2,
    },

    underline: {
        marginTop: vh * 1,
        height: 2.5,
        width: vw * 16,
        backgroundColor: Theme.secondary,
    },
});
