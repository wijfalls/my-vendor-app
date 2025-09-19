import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Theme} from 'utils/Theme.util';
import {vh, vw} from 'utils/Constants.util';
import AppText from 'components/AppText';

const ThreadItems = ({
  userImage,
  userName,
  date,
  threadImages,
  title,
  description,
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
      </View>

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
    </View>
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
  },
});

export default ThreadItems;
