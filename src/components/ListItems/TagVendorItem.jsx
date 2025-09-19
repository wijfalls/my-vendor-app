import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {Theme} from 'utils/Theme.util';
import {AppButton} from 'components/Buttons';

const TagVendorItem = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.itemContainer}>
          <Image source={Icons.Event} style={styles.icon} />
          <View>
            <AppText style={styles.label}>Event Name</AppText>
            <AppText style={styles.value}>Sangeet</AppText>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={Icons.Calendar} style={styles.icon} />
          <View>
            <AppText style={styles.label}>Event Date</AppText>
            <AppText style={styles.value}>24 Sep, 2024</AppText>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.itemContainer}>
          <Image source={Icons.OutlineLocation} style={styles.icon} />
          <View>
            <AppText style={styles.label}>Event Location</AppText>
            <AppText style={styles.value}>Google Location</AppText>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image source={Icons.Guests} style={styles.icon} />
          <View>
            <AppText style={styles.label}>Guest</AppText>
            <AppText style={styles.value}>100</AppText>
          </View>
        </View>
      </View>
      <AppButton onPress={onPress} containerStyle={styles.btn}>Tag Vendor</AppButton>
    </View>
  );
};

export default TagVendorItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: '#D8D8D8',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 8,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 15,
    color: Theme.text,
  },
  value: {
    fontSize: 12,
    color: Theme.text,
  },
  btn: {
    width: '100%',
  },
});
