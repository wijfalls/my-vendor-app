import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {vh} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const ServiceTile = ({image, title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      key={title}
      style={styles.partyItem}
      onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.partyImage} />
      </View>
      <AppText weight="medium" style={styles.partyName} numberOfLines={2}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default ServiceTile;

const styles = StyleSheet.create({
  partyItem: {
    alignItems: 'center',
    // marginTop: vh * 1.5,
  },
  partyImage: {
    width: vh * 7,
    height: vh * 7,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  partyName: {
    fontSize: 12,
    marginTop: vh * 1,
    width: vh * 8.5,
    textAlign: 'center',
    // color: Theme.primary,
  },
  imageContainer: {
    height: vh * 7,
    width: vh * 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
