import {Icons} from 'assets/images';
import {vw} from 'utils/Constants.util';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {vh} from '../../utils/Constants.util';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={navigation.goBack}>
      <Image source={Icons.BackOrange} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginLeft: vw * 2.5,
  },
  icon: {
    height: vh * 6,
    width: vh * 6,
    resizeMode: 'contain',
  },
});
