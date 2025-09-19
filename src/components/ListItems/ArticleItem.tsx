import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import {date} from 'yup';

const ArticleItem = ({
  image,
  title,
  category,
  location,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.infoContainer}>
          <AppText weight="medium" style={styles.title} numberOfLines={3}>
            Navigating Conversations: How to Talk to Your LGBTQ+ Child
          </AppText>
          <View style={styles.locationContainer}>
            <AppText style={styles.date}>Date:</AppText>
            <AppText style={styles.location}>24 Sept, 2024</AppText>
          </View>
        </View>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      {description && (
        <View>
          <View style={styles.divider} />
          <AppText weight="medium" style={styles.description} numberOfLines={3}>
            {description}
          </AppText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ArticleItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardBG,
    borderRadius: vh * 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vh,
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
    height: vh * 11,
    borderRadius: vh * 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  infoContainer: {
    alignItems: 'center',
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    width: '98%',
    height: 1,
    backgroundColor: Theme.border,
    marginTop: vh * 2,
    alignSelf: 'center',
  },
  description: {
    fontSize: 12,
    marginTop: vh * 1.3,
    marginLeft: vw * 1.8,
    color: Theme.text,
  },
});
