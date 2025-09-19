import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {FontSize, vh} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const VendorCard = ({data, onPress, onPressDelete, onPressEdit}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.card}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={onPressDelete}>
          <Image source={Icons.Delete} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={onPressEdit}>
          <Image source={Icons.Edit} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.horizontalContainer}>
          {data?.price && (
            <AppText style={styles.price} weight="none">
              $ {data.price}
            </AppText>
          )}
          <AppText style={styles.name} weight="semiBold">
            {data.name}
          </AppText>
          <View style={styles.categoryContainer}>
            <Rating
              showRating={false}
              // onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 10}}
              imageSize={10}
              ratingCount={5}
              showReadOnlyText={false}
              minValue={1}
              startingValue={4}
            />
            <AppText weight="none" style={styles.ratingAvg}>
              4.0
            </AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VendorCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Theme.border,
    width: '48%',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: vh * 14,
    borderRadius: 14,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  name: {
    fontSize: 15,
    color: Theme.text,
  },
  price: {
    fontSize: 15,
    color: Theme.text,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 10,
    marginHorizontal: 7,
    marginTop: 2,
  },
  location: {
    fontSize: 13,
  },
  categoryText: {
    fontSize: 10,
    color: Theme.text,
  },
  iconContainer: {
    borderRadius: vh * 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 3.5,
    width: vh * 3.5,
    backgroundColor: Theme.white,
    marginHorizontal: 2,
  },
  horizontalContainer: {
    // flexDirection: 'row',
    // width: '50%',
  },
  icon: {
    width: vh * 2,
    height: vh * 2,
    resizeMode: 'contain',
  },
  heart: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    top: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flexWrap: 'wrap',
    // flex: 1,
    columnGap: 10,
    // marginTop: 5,
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
  ratingAvg: {
    fontSize: vh * 1.2,
    color: Theme.grayText,
  },
});
