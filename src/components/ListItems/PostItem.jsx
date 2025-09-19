import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Theme} from 'utils/Theme.util';
import {vh, vw} from 'utils/Constants.util';
import AppText from 'components/AppText';
import {Icons} from 'assets/images';

const PostItem = ({
  userImage,
  userName,
  date,
  threadImages,
  title,
  description,
  onPress,
  editIcon,
  onPressEdit,
  onPressDelete,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageRow}>
        {threadImages?.map((image, index) => (
          <Image key={index} source={{uri: image}} style={styles.threadImage} />
        ))}
      </View>

      <AppText style={styles.title}>
        {title || 'Navigating Conversations: How to Talk to Your LGBTQ+ Child'}
      </AppText>

      <AppText style={styles.description}>
        {description ||
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem lipsum dolor sit amit.'}
      </AppText>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={onPressEdit} style={styles.iconButton}>
          <Image source={editIcon ?? Icons.Edit} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete} style={styles.iconButton}>
          <Image source={Icons.Delete} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.cardBG,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
    width: '49%',
    height: vh * 13,
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
    width: '90%',
  },
  actionButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
  iconButton: {
    padding: 4,
  },
  icon: {
    width: vh * 2,
    height: vh * 2,
    resizeMode: 'contain',
  },
});

export default PostItem;
