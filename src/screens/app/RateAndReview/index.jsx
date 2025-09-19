import AppText from 'components/AppText';
import UserReview from 'components/UserReview';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import styles from './styles';
const sampleReviews = [
  {
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    rating: 4,
    date: '2023-10-01',
    text: 'Great service! Highly recommend.',
  },
  {
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Jane Smith',
    rating: 5,
    date: '2023-09-15',
    text: 'Amazing experience, will definitely come back.',
  },
  {
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Mike Johnson',
    rating: 3,
    date: '2023-08-20',
    text: 'It was okay, could be better.',
  },
];
const RateAndReview = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppText weight="medium" style={styles.sectionTitle}>
        Ratings
      </AppText>
      <View style={styles.horizontalContainer}>
        <View style={styles.horizontalContainer}>
          <AppText weight="medium" style={styles.ratingText}>
            4.5
          </AppText>
          <AirbnbRating
            showRating={false}
            defaultRating={4}
            count={5}
            size={19}
          />
        </View>
        <AppText style={styles.reviewCount}>(100)</AppText>
      </View>
      <View style={[styles.separator, {marginVertical: 0}]} />
      {sampleReviews.map(e => (
        <UserReview review={e} />
      ))}
    </ScrollView>
  );
};

export default RateAndReview;
