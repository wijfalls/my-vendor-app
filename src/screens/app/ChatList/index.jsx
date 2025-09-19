import AppText from 'components/AppText';
import {ScreenWrapper, WrapperWithHeader} from 'components/Wrapper';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {followersData, notificationsConstants} from 'utils/Constants.util';
import styles from './styles';
import {SearchInput} from 'components/Input';
import fonts from 'assets/fonts';
import ListCard from './ListCard';

const ChatList = ({navigation}) => {
  function renderItem({item}) {
    return (
      <ListCard
        name={item.name}
        message={item.message}
        image={item.image}
        unReadCount={4}
        createdAt={item.createdAt}
        onPress={() => navigation.navigate('Chat')}
      />
    );
  }
  function renderListSeparator() {
    return <View style={styles.separator} />;
  }

  return (
    <View style={styles.container}>
      <SearchInput placeholder={'Search'} style={styles.marginSearch} />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={followersData}
        renderItem={renderItem}
        ItemSeparatorComponent={renderListSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatList;
