import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../AppText/index';
import {Theme} from 'utils/Theme.util';
import {vh, vw} from 'utils/Constants.util';

const GroupItem = ({image, title, onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.contentContainer}>
        <AppText weight="medium" style={styles.title}>
          {title}
        </AppText>
        <AppText weight="regular" style={styles.members}>
          22k Members
        </AppText>
        <AppText style={styles.posts}>10+ Posts A Day</AppText>
      </View>
      <TouchableOpacity style={styles.joinButton} onPress={onPress}>
        <AppText style={styles.joinText}>Join</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Theme.cardBG,
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  image: {
    width: 90,
    height: 75,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  members: {
    fontSize: 14,
    color: Theme.primary,
    marginBottom: 2,
  },
  posts: {
    fontSize: 12,
  },
  joinButton: {
    position: 'absolute',
    bottom: 13,
    right: 12,
    backgroundColor: Theme.secondary,
    paddingVertical: vh * 0.3,
    paddingHorizontal: vw * 5,
    borderRadius: vh * 5,
  },
  joinText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default GroupItem;
