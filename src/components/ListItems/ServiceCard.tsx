import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const ServiceCard = ({image, title, onPress}) => {
  return (
    <TouchableOpacity key={title} style={styles.partyItem} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.partyImage} />
        <AppText weight="medium" style={styles.partyName} numberOfLines={2}>
          {title}
        </AppText>
      </View>
      <Image source={Icons.ArrowDown} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  partyItem: {
    alignItems: 'center',
    flexDirection: 'row',
    width: vw * 90,
    justifyContent: 'space-between',
  },
  partyImage: {
    width: vh * 7,
    height: vh * 7,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  partyName: {
    fontSize: FontSize * 1.2,
    marginLeft: vw * 4,
    includeFontPadding: false,
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrow: {
    width: vh * 3,
    height: vh * 3,
    resizeMode: 'cover',
    transform: [{rotate: '270deg'}],
  },
});
