import AppText from 'components/AppText';
import {ScreenWrapper} from 'components/Wrapper';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {notificationsConstants} from 'utils/Constants.util';
import NotificationItem from './NotificationItem';
import styles from './styles';

const Notifications = () => {
  function renderItem({item}) {
    return (
      <NotificationItem
        title={item.title}
        subTitle={item.subTitle}
        image={item.image}
        createdAt={item.createdAt}
      />
    );
  }
  function renderListSeparator() {
    return <View style={styles.separator} />;
  }
  return (
    <ScreenWrapper style={styles.container}>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={notificationsConstants}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default Notifications;
