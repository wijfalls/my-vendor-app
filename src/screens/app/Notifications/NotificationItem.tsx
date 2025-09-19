import AppText from 'components/AppText';
import {TextButton} from 'components/Buttons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
dayjs.extend(relativeTime);
const NotificationItem = ({title, subTitle, image, createdAt}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <View style={[styles.row, styles.timeContainer]}>
          <AppText weight="medium" style={styles.title}>
            {title}
          </AppText>
          <AppText style={styles.time}>{dayjs(createdAt).fromNow()}</AppText>
        </View>

        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
        <View style={styles.row}>
          <View style={[styles.row, styles.dateTime]}>
            {/* <AppText style={styles.time}>Date: </AppText> */}
            {/* <AppText style={styles.time}>
              {dayjs(createdAt).format('DD/MM/YY')}
            </AppText> */}
            <TextButton
              weight="regular"
              color={'#19C6ED'}
              containerStyle={styles.markRead}
              titleStyle={styles.italic}>
              Mark As Read
            </TextButton>
          </View>
        </View>
        {/* <TextButton
          weight="regular"
          color={Theme.textOrange}
          containerStyle={styles.markRead}
          titleStyle={styles.italic}>
          Mark As Read
        </TextButton> */}
      </View>
    </View>
  );
};

export default React.memo(NotificationItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: vh * 1,
    backgroundColor: Theme.cardBG,
    borderWidth: 1,
    borderColor: Theme.border,
    // marginBottom: vh * 2,
    // borderRadius: vw * 3,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: Theme.border,
    borderRadius: 5,
    height: vh * 7.45,
    width: vh * 7.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'contain',
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: vw * 5,
  },
  title: {
    fontSize: FontSize * 1.4,
    color: Theme.black,
  },
  subTitle: {
    marginTop: vh * 1,
    fontSize: FontSize * 1.15,
    color: Theme.grayText,
    flex: 1,
  },
  time: {
    color: Theme.placeholder,
    // marginRight: vw * 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateTime: {
    width: vw * 30,
  },
  markRead: {
    alignSelf: 'flex-end',
    marginTop: vh * 1,
  },
  italic: {
    // fontStyle: 'italic',
    textDecorationLine: 'none',
  },
  timeContainer: {
    alignSelf: 'flex-end',
    // marginTop: vh * 1,
  },
});
