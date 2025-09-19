import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Theme} from 'utils/Theme.util';
import {vh, vw} from 'utils/Constants.util';
import AppText from 'components/AppText';
import {Icons} from 'assets/images';

const StoryItem = ({
  userImage,
  userName,
  date,
  threadImages,
  title,
  description,
  onPressEdit,
  onPressDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: userImage}} style={styles.profileImage} />
        <View style={styles.headerText}>
          <AppText weight="bold" style={styles.userName}>
            {userName}
          </AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
        <View style={styles.actionButtons}>
          {onPressEdit && (
            <TouchableOpacity style={styles.actionButton} onPress={onPressEdit}>
              <Image source={Icons.Edit} style={styles.actionIcon} />
            </TouchableOpacity>
          )}
          {onPressDelete && (
            <TouchableOpacity
              onPress={onPressDelete}
              style={styles.actionButton}>
              <Image source={Icons.Delete} style={styles.actionIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.imageRow}>
        <Image source={{uri: threadImages}} style={styles.threadImage} />
      </View>

      <AppText style={styles.title}>
        {title || 'Navigating Conversations: How to Talk to Your LGBTQ+ Child'}
      </AppText>
      <View style={styles.categoryContainer}>
        <AppText>Category:</AppText>
        <AppText weight="bold" style={styles.category}>
          {'Abc'}
        </AppText>
      </View>
      <AppText style={styles.description}>
        {description ||
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem lipsum dolor sit amit.'}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardBG,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: vw * 85,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 12,
  },
  userName: {
    color: Theme.black,
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    color: Theme.primary,
    fontSize: 12,
  },
  imageRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  threadImage: {
    width: '100%',
    height: vh * 15,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: Theme.placeholder,
  },
  actionButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  actionButton: {
    padding: 4,
  },
  actionIcon: {
    width: 15,
    height: 15,
  },
  categoryContainer: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    color: Theme.primary,
    fontSize: 12,
    marginLeft: 4,
  },
});

export default StoryItem;
