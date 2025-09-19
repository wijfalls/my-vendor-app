import AppText from 'components/AppText';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Theme} from 'utils/Theme.util';

const SectionTitle = ({title, showRightBtn = false, onPressRight}) => {
  return (
    <View style={styles.container}>
      <View>
        <AppText weight="bold" style={styles.title}>
          {title}
        </AppText>
      </View>
      {showRightBtn ? (
        <TouchableOpacity onPress={onPressRight}>
          <AppText weight="medium" style={styles.viewAllText}>
            View More
          </AppText>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
  },
  title: {
    fontSize: 20,
    color: Theme.textBtn,
  },
  viewAllText: {
    fontSize: 14,
    // textDecorationLine: 'underline',
    color: Theme.primary,
  },
  bar: {
    height: 2,
    width: 70,
    backgroundColor: Theme.textBtn,
    marginTop: 5,
  },
});
