import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const ThreadItem = ({image, title, category, location}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <AppText weight="medium" style={styles.title}>
        {title}
      </AppText>
      <View style={styles.infoContainer}>
        <AppText style={styles.category}>Location</AppText>
        {/* <View style={styles.separator} /> */}
        <View style={styles.locationContainer}>
          <AppText style={styles.location}>{location}</AppText>
        </View>
      </View>
      {/* <View style={styles.ratingContainer}>
        <Image source={Icons.Rating} style={styles.ratingImage} />
        <AppText style={styles.rating}>4.5</AppText>
      </View> */}
    </View>
  );
};

export default ThreadItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardBG,
    borderRadius: vh * 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    marginRight: 2,
  },
  image: {
    width: vw * 36,
    height: vh * 13,
    borderRadius: vh * 1,
    marginBottom: vh * 1,
  },
  title: {
    fontSize: 14,
    color: Theme.text,
    marginBottom: vh * 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 10,
    color: Theme.text,
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: Theme.secondary,
    marginHorizontal: vw * 2,
  },
  location: {
    fontSize: 10,
    color: Theme.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 0.5,
    justifyContent: 'flex-end',
  },
  ratingImage: {
    height: 18,
    resizeMode: 'contain',
    width: 55,
  },
  rating: {
    fontSize: 10,
    color: Theme.text,
  },
});
