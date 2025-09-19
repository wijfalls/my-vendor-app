import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {vh} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const CategoryItem = ({party}) => {
  return (
    <View key={party.id} style={styles.partyItem}>
      <View style={styles.imageContainer}>
        <Image source={party.image} style={styles.partyImage} />
      </View>
      <AppText style={styles.partyName} numberOfLines={2}>
        {party.name}
      </AppText>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  partyItem: {
    alignItems: 'center',
    // marginTop: vh * 1.5,
  },
  partyImage: {
    width: vh * 5,
    height: vh * 5,
    // borderRadius: 50,
    resizeMode: 'contain',
    tintColor: Theme.primary,
  },
  partyName: {
    fontSize: 12,
    marginTop: vh * 1,
    width: vh * 8.5,
    textAlign: 'center',
    color: Theme.primary,
  },
  imageContainer: {
    height: vh * 5,
    width: vh * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
