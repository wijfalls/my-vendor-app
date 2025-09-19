import {Backgrounds} from 'assets/Images';
import AppText from 'components/AppText';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
const HeaderText = ({heading, headerRight}) => {
  return (
    <View style={styles.header}>
      <View>
        <AppText weight="bold" style={styles.title}>
          {heading}
        </AppText>
        <View style={styles.underline} />
      </View>

      {headerRight && headerRight()}
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  header: {
    padding: vh * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize * 1.6,
    color: Theme.textBtn,
  },

  underline: {
    marginTop: vh * 1,
    height: 2,
    width: vw * 20,
    backgroundColor: Theme.secondary,
  },
});
