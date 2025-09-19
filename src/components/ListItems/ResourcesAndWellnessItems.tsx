import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import {date} from 'yup';

const ResourcesAndWellnessItems = ({image, title, dare, category, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText weight="medium" style={styles.title} numberOfLines={1}>
          Understanding Identity
        </AppText>
        <AppText weight="medium" style={styles.date}>
          Date: 24 Sept, 2024
        </AppText>
        <AppText style={styles.category}>Support & Advice</AppText>
        <AppText weight="light" style={styles.description} numberOfLines={2}>
          lorem lipsum dolor sit amit dummy
        </AppText>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ResourcesAndWellnessItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardBG,
    borderRadius: vh * 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vh,
    marginVertical: vh * 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: vw * 1.8,
    alignItems: 'center',
    marginTop: vh * 0.5,
  },
  image: {
    width: vh * 13,
    // height: vh * 11,
    borderRadius: vh * 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  infoContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
  },
  location: {
    fontSize: 12,
    color: Theme.primary,
    marginLeft: vw * 3,
  },
  date: {
    fontSize: 12,
    color: Theme.primary,
  },
  description: {
    fontSize: vh * 1.8,
    width: '100%',
    marginTop: 2,
  },
});
