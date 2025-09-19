import {Backgrounds, Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import UserReview from 'components/UserReview';
import VendorCard from 'components/VendorCard';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const sampleReviews = [
  {
    userImage: Backgrounds.ProfilePlaceholder,
    name: 'Casey Hunter',
    rating: 4,
    date: '2023-10-01',
    text: 'Great service! Highly recommend.',
  },
  {
    userImage: Backgrounds.ProfilePlaceholder,
    name: 'Casey Hunter',
    rating: 5,
    date: '2023-09-15',
    text: 'Amazing experience, will definitely come back.',
  },
  {
    userImage: Backgrounds.ProfilePlaceholder,
    name: 'Casey Hunter',
    rating: 3,
    date: '2023-08-20',
    text: 'It was okay, could be better.',
  },
];
const services = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPC5E7qgJnGZA2bTdimQwam-b9DXM-8UCvQA&s',
    name: 'Luxury Sofa Set',
    rating: 4.5,
    location: 'New York',
    categories: ['Photography & Videography', 'Wedding', 'Sangeet'],
    price: '25.00',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIFYMMwb4Uoww_7g6KyHjm2KYlT4_kZfwjw&s',
    name: 'Car Mechanic',
    rating: 4.5,
    location: 'Car Mechanic',
    categories: ['Photography & Videography', 'Wedding', 'Sangeet'],
    price: '25.00',
  },
];
const ServiceDetails = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.userContainer}>
          <Image
            source={Backgrounds.ProfilePlaceholder}
            style={styles.profile}
          />
          <View>
            <AppText style={styles.title}>Vendor</AppText>
            <AppText>Casey Hunter</AppText>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <AppText style={styles.name} weight="none">
            $ {data.price}
          </AppText>
          {/* <View style={styles.ratingContainer}>
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={data.rating}
              isDisabled
              size={15}
            />
            <AppText style={styles.rating}>{data.rating}</AppText>
          </View> */}
        </View>
        <AppText style={styles.location} weight="semiBold">
          {data.name}
        </AppText>

        <View style={styles.categoryContainer}>
          <AppText style={styles.title}>Category</AppText>
          <AppText style={styles.product}>Furniture</AppText>

          <AppText style={styles.title}>Condition</AppText>
          <AppText style={styles.condition}>New</AppText>
        </View>
        <View style={styles.separator} />
        <View style={styles.horizontalContainer}>
          <AppText weight="medium" style={styles.sectionTitle}>
            Services Details
          </AppText>
        </View>
        <AppText style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </AppText>

        <View style={styles.separator} />
        <AppText weight="semiBold" style={styles.sectionTitle}>
          Reviews and Ratings
        </AppText>
        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalContainer}>
            <AppText weight="none" style={styles.ratingText}>
              4.0
            </AppText>
            <Rating
              showRating={false}
              // onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 10}}
              imageSize={20}
              ratingCount={5}
              showReadOnlyText={false}
              minValue={5}
              startingValue={4}
            />
          </View>
          <AppText weight="none" style={styles.reviewCount}>
            (100)
          </AppText>
        </View>
        <View style={[styles.separator, {marginVertical: 0}]} />
        {sampleReviews.map(e => (
          <UserReview review={e} />
        ))}
        <TouchableOpacity style={styles.viewMoreBtn}>
          <AppText style={styles.viewText}>View More</AppText>
        </TouchableOpacity>
        <View style={styles.separator} />
        <AppText weight="medium" style={styles.sectionTitle}>
          Rate Your Experience
        </AppText>
        <View style={styles.horizontalContainer}>
          <Rating
            showRating={false}
            // onFinishRating={this.ratingCompleted}
            style={{paddingVertical: 10}}
            imageSize={25}
            ratingCount={5}
            showReadOnlyText={false}
            minValue={1}
            startingValue={3}
          />
        </View>
        <AppTextInput
          placeholder="Write your review here"
          inputContainerStyle={styles.writeReviewInput}
          textAlignVertical="top"
        />
        <AppButton containerStyle={styles.postBtn}>Post</AppButton>
        <View style={styles.separator} />

        <View style={styles.horizontalContainer}>
          <AppText weight="medium" style={styles.sectionTitle}>
            Vendor Details
          </AppText>
          <TouchableOpacity
            style={styles.tagVendorButton}
            onPress={() => navigation.navigate('VendorProfile')}>
            <AppText style={styles.tagVendorButtonText}>View Profile</AppText>
          </TouchableOpacity>
        </View>
        <AppText style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </AppText>
        <View style={styles.separator} />
        <AppText weight="semiBold" style={styles.sectionTitle}>
          Other Services
        </AppText>
        <View style={{width: '100%'}}>
          <FlatList
            data={services}
            renderItem={({item}) => {
              return (
                <VendorCard
                  data={item}
                  onPress={() =>
                    navigation.navigate('ServiceDetails', {data: item})
                  }
                  onPressChat={() => {
                    navigation.navigate('Chat');
                  }}
                  onPressCall={() => {}}
                />
              );
            }}
            columnWrapperStyle={styles.row}
            numColumns={2}
            keyExtractor={(item, index) => item + '' + index}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            // style={styles.list}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // flex: 1,
    marginTop: 10,
  },
  imageContainer: {
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  heartIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff9',
    borderRadius: 15,
    padding: 8,
  },
  heartIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: Theme.white,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 45,
    backgroundColor: '#fff9',
    borderRadius: 15,
    padding: 8,
  },
  cameraIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  contentContainer: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    color: Theme.text,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
  },
  location: {
    fontSize: 16,
    marginVertical: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    columnGap: 10,
  },
  categoryItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  checkIconContainer: {
    backgroundColor: '#A71313',
    borderRadius: 10,
    padding: 2,
  },
  checkIcon: {
    width: 5,
    height: 5,
    resizeMode: 'contain',
    tintColor: Theme.white,
  },
  categoryText: {
    fontSize: 12,
    color: Theme.text,
  },
  iconContainer: {
    padding: 5,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#FF3A3A1A',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  tagVendorButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    gap: 5,
  },
  tagVendorButtonText: {
    color: Theme.primary,
    fontSize: 14,
  },
  description: {
    fontSize: 10,
    color: Theme.text,
    marginBottom: 16,
  },
  contactInfoContainer: {
    marginTop: 8,
  },
  contactInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: Theme.primary,
  },
  contactText: {
    fontSize: 14,
    color: Theme.text,
  },
  priceTag: {
    fontSize: 14,
    color: Theme.statusRed,
    marginBottom: 2,
  },
  price: {
    fontSize: 12,
    color: Theme.text,
  },
  serviceItemContainer: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 30,
    marginRight: 5,
  },
  reviewCount: {
    fontSize: 10,
    color: '#B0B0B0',
  },
  viewMoreBtn: {
    // alignSelf: 'flex-end',
  },
  viewText: {
    color: Theme.primary,
  },
  writeReviewInput: {
    height: vh * 20,
    marginTop: vh * 2,
    backgroundColor: Theme.white,
  },
  postBtn: {
    width: '100%',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    columnGap: 10,
    marginTop: 5,
  },
  title: {
    fontSize: FontSize * 0.9,
    color: Theme.grayText,
  },
  product: {
    fontSize: FontSize * 0.9,
    color: Theme.primary,
    textAlign: 'center',
    backgroundColor: '#ED8919' + '44',
    paddingVertical: 1,
    includeFontPadding: false,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 3,
  },
  condition: {
    fontSize: FontSize * 0.9,
    color: '#19C6ED',
    textAlign: 'center',
    backgroundColor: '#19C6ED' + '44',
    includeFontPadding: false,
    paddingVertical: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 3,
  },
  profile: {
    height: vh * 5,
    width: vh * 5,
    borderRadius: vh * 10,
    marginRight: vw * 2,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  listContainer: {
    gap: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  row: {
    width: '100%',
    justifyContent: 'space-between',
    // height: vh * 80,
  },
});
