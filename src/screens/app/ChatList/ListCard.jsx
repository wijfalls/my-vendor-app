import {Icons} from 'assets/Images';
import AppText from 'components/AppText';
import {TextButton} from 'components/Buttons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
dayjs.extend(relativeTime);
const ListCard = ({name, message, image, createdAt, unReadCount, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.dateTime]}>
        <AppText>{dayjs(createdAt).format('hh:mm a')}</AppText>
      </View>
      <View style={styles.imageContainer}>
        <AppText style={styles.count}>{unReadCount}</AppText>
        <Image source={{uri: image}} style={styles.image} />
      </View>

      <View style={styles.rightContainer}>
        <AppText weight="bold" style={styles.subTitle} numberOfLines={2}>
          {name}
        </AppText>
        <AppText weight="light" numberOfLines={1} style={{width: vw * 65}}>
          {message}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ListCard);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: vh * 10,
    backgroundColor: Theme.white,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: Theme.border,
    padding: vh * 2,
    alignItems: 'center',
  },
  imageContainer: {
    height: vh * 7.45,
    width: vh * 7.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: vh * 6.5,
    width: vh * 6.5,
    resizeMode: 'cover',
    borderRadius: vh * 5,
  },
  rightContainer: {
    paddingLeft: vw * 3,
    // height: vh * 5,
  },
  title: {
    fontSize: FontSize * 1.15,
    color: Theme.black,
  },
  subTitle: {
    fontSize: FontSize * 1.15,
    flex: 1,
  },

  dateTime: {
    width: vw * 30,
    position: 'absolute',
    right: vw * -12,
    top: vh * 2,
  },
  count: {
    position: 'absolute',
    zIndex: 999,
    backgroundColor: Theme.primary,
    borderRadius: 50,
    color: Theme.white,
    height: vh * 2.2,
    width: vh * 2.2,
    textAlign: 'center',
    fontSize: FontSize * 1,
    right: 5,
    top: 5,
  },
});
