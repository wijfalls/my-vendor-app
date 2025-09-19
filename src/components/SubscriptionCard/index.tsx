import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import AppText from 'components/AppText';
import {AppTextInput} from 'components/Input';
import {Icons} from 'assets/Images';
import {AppButton} from 'components/Buttons';

const SubscriptionCard = ({
  name,
  image,
  status,
  bookingDate,
  recurringDate,
  price,
  cancel,
}) => {
  return (
    <View style={[styles.containerBox, styles.itemContainer]}>
      <View style={styles.row}>
        <View style={styles.line} />
        <View style={styles.content}>
          <View style={styles.row}>
            <AppText weight="medium">Subscribed On: </AppText>
            <AppText style={styles.primaryColor}>{bookingDate}</AppText>
          </View>
          <View style={styles.row}>
            <AppText weight="medium">Expires On: </AppText>
            <AppText style={styles.primaryColor}>{bookingDate}</AppText>
          </View>
          <View style={styles.row}>
            <AppText weight="medium">Amount Paid: </AppText>
            <AppText style={styles.primaryColor}>${price}</AppText>
          </View>
          <View style={styles.row}>
            <AppText weight="medium">Duration: </AppText>
            <AppText style={styles.primaryColor}>Monthly</AppText>
          </View>
        </View>
      </View>
      {cancel && (
        <AppButton containerStyle={styles.cancelBtn}>
          Cancel Subscription
        </AppButton>
      )}
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  containerBox: {
    paddingHorizontal: vw * 4,
    paddingVertical: vh * 4,
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: vh * 1,
    shadowColor: Theme.border,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: Theme.cardBG,
    width: vw * 90,
    marginBottom: vh * 1.2,
  },
  itemContainer: {
    paddingHorizontal: vw * 3,
    // paddingVertical: vh * 2,
    // paddingBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: vh,
  },
  name: {
    fontSize: FontSize * 1.2,
  },
  itemImage: {
    height: vh * 6,
    width: vh * 6,
    borderRadius: vh * 0.8,
    marginRight: vw * 2,
  },
  cancelBtn: {
    width: '60%',
    backgroundColor: Theme.textOrange,
    // height: vh * 4,
  },
  divider: {
    height: 1,
    width: vw * 84,
    backgroundColor: Theme.border,
    marginBottom: vh,
  },
  primaryColor: {
    // color: Theme.primary,
  },
  line: {
    height: '93%',
    width: 3,
    backgroundColor: Theme.headerTab,
    marginHorizontal: vw * 2,
  },
  content: {
    // marginTop: vh * 1,
  },
});
