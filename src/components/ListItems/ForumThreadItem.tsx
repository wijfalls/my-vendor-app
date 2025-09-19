import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppTextInput} from 'components/Input';
import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {vh} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const ForumThreadItem = ({
  userImage,
  userName,
  date,
  title,
  category,
  description,
  replies,
  onPress,
  comment,
  reply,
  commentLabel,
  commentLabelStyle,
}) => {
  const [commentText, setCommentText] = useState('');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{uri: userImage}} style={styles.userImage} />
          <View>
            <AppText weight="bold" style={styles.userName}>
              {userName}
            </AppText>
            <AppText style={styles.date}>{date}</AppText>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.content}>
        <AppText weight="medium" style={styles.title}>
          {title}
        </AppText>
        {category && (
          <View style={styles.categoryContainer}>
            <AppText>Category:</AppText>
            <AppText weight="medium" style={styles.category}>
              {category}
            </AppText>
          </View>
        )}
        <AppText style={styles.description}>{description}</AppText>
      </View>

      {!comment && (
        <View style={styles.footer}>
          <AppText
            weight="bold"
            style={styles.replies}>{`${replies} Replies`}</AppText>
          <TouchableOpacity onPress={onPress}>
            <AppText style={styles.viewThread}>View Thread</AppText>
          </TouchableOpacity>
        </View>
      )}
      {comment && (
        <View style={styles.commentInputContainer}>
          {reply && (
            <AppText
              weight="bold"
              style={[
                styles.replies,
                styles.commentReply,
              ]}>{`${replies} Replies`}</AppText>
          )}
          <AppTextInput
            label={commentLabel ?? 'Comment'}
            labelStyle={[styles.commentLabel, commentLabelStyle]}
            value={commentText}
            onChangeText={setCommentText}
            placeholder="Write a comment..."
            style={styles.commentInput}
            inputContainerStyle={styles.textInputContainer}
            containerStyle={styles.Containerstyle}
            rightIcon={Icons.SolidSend}
            onRightIconPress={() => {
              // Handle send comment
              setCommentText('');
            }}
            borderColor={Theme.primary}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.cardBG,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 14,
    marginRight: 8,
  },
  date: {
    color: Theme.primary,
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.border,
    marginVertical: 12,
  },
  content: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  categoryContainer: {
    backgroundColor: Theme.primaryLight,
    paddingVertical: 4,
    borderRadius: 4,
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
  description: {
    fontSize: 14,
    marginBottom: 12,
    color: Theme.placeholder,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  replies: {
    color: Theme.secondary,
    fontSize: 12,
  },
  viewThread: {
    color: Theme.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  commentInputContainer: {},
  commentInput: {
    backgroundColor: 'transparent',
  },
  textInputContainer: {
    backgroundColor: Theme.cardBG,
    color: Theme.white,
    borderRadius: 5,
    borderColor: Theme.primary,
  },
  Containerstyle: {
    backgroundColor: 'transparent',
  },
  commentReply: {
    position: 'absolute',
    zIndex: 9999,
    top: -15,
    right: 10,
  },
  commentLabel: {fontWeight: 'bold'},
});

export default ForumThreadItem;
