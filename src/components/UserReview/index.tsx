import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppTextInput} from 'components/Input';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {Theme} from 'utils/Theme.util';

const UserReview = ({review}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowSpaceBetween}>
        <View style={styles.row}>
          <Image source={review.image} style={styles.userImage} />
          <View style={styles.vertical}>
            <AppText weight="medium" style={styles.name}>
              {review.name}
            </AppText>
            <View style={styles.row}>
              <Rating
                showRating={false}
                // onFinishRating={this.ratingCompleted}
                style={{paddingVertical: 10}}
                imageSize={10}
                ratingCount={5}
                showReadOnlyText={false}
                startingValue={review.rating}
                minValue={1}
              />
              <AppText style={styles.rating} weight="none">
                {review.rating.toFixed(1)}
              </AppText>
            </View>
          </View>
        </View>
        <AppText style={styles.date}>{review.date}</AppText>
      </View>
      <AppText style={styles.reviewText}>{review.text}</AppText>
      {/* <AppTextInput
        label="Reply"
        containerStyle={{marginBottom: 0, marginTop: 5}}
        placeholder="Write a review"
        rightIcon={Icons.Send}
        inputContainerStyle={{
          backgroundColor: Theme.white,
          height: 45,
        }}
      /> */}
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  vertical: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 12,
    color: Theme.text,
  },
  rating: {
    fontSize: 10,
    marginLeft: 5,
  },
  date: {
    fontSize: 10,
    color: '#888',
  },
  reviewText: {
    marginTop: 10,
    fontSize: 10,
    color: Theme.text,
  },
});
