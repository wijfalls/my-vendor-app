import {ScreenWrapper, WrapperWithHeader} from 'components/Wrapper';
import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {subscriptions} from 'utils/Constants.util';
import SubscriptionCard from 'components/SubscriptionCard';
import AppText from 'components/AppText';

const SubscriptionLog = ({navigation}) => {
  const ratingPopupRef = useRef();
  function renderItem({item}) {
    return (
      <SubscriptionCard
        name={item.name}
        image={item.image}
        status={item.status}
        bookingDate={item.bookingDate}
        recurringDate={item.recurringDate}
        price={item.total}
      />
    );
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <AppText style={styles.heading}>Current Subscription</AppText>
        <SubscriptionCard
          name={subscriptions[0].name}
          image={subscriptions[0].image}
          status={subscriptions[0].status}
          bookingDate={subscriptions[0].bookingDate}
          recurringDate={subscriptions[0].recurringDate}
          price={subscriptions[0].total}
          cancel
        />
        <AppText style={styles.heading}>Past Subscription</AppText>
        <FlatList
          data={subscriptions}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SubscriptionLog;