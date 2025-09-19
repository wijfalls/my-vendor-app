import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {Icons} from 'assets/images';
import {AppTextInput} from 'components/Input';
import {Theme} from 'utils/Theme.util';
import AppText from 'components/AppText';

const MyAdsScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Approved', 'Pending', 'Rejected'];

  const adItems = [
    {
      id: '1',
      title: 'Luxury Sofa Set',
      price: '25.00',
      status: 'Approved',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPC5E7qgJnGZA2bTdimQwam-b9DXM-8UCvQA&s',
      timestamp: '22 hours ago',
    },
    {
      id: '2',
      title: 'Luxury Sofa Set',
      price: '25.00',
      status: 'Pending',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPC5E7qgJnGZA2bTdimQwam-b9DXM-8UCvQA&s',
      timestamp: '22 hours ago',
    },
    {
      id: '3',
      title: 'Luxury Sofa Set',
      price: '25.00',
      status: 'Rejected',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPC5E7qgJnGZA2bTdimQwam-b9DXM-8UCvQA&s',
      timestamp: '22 hours ago',
    },
    {
      id: '4',
      title: 'Luxury Sofa Set',
      price: '25.00',
      status: 'Pending',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPC5E7qgJnGZA2bTdimQwam-b9DXM-8UCvQA&s',
      timestamp: '22 hours ago',
    },
  ];

  const filteredAds =
    selectedTab === 'All'
      ? adItems
      : adItems.filter(
          item => item.status.toLowerCase() === selectedTab.toLowerCase(),
        );

  const renderAdItem = ({item}) => {
    const getStatusColor = status => {
      switch (status) {
        case 'Approved':
          return '#4CAF50';
        case 'Pending':
          return '#FF9800';
        case 'Rejected':
          return '#F44336';
        default:
          return '#757575';
      }
    };

    return (
      <View style={styles.adItem}>
        <View style={styles.adImageContainer}>
          <Image source={{uri: item.image}} style={styles.adImage} />
          <View style={styles.iconOverlay}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={Icons.Delete} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() =>
                navigation.navigate('CreateAds', {data: {id: item.id}})
              }>
              <Image source={Icons.Edit} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.adDetails}>
          <View style={styles.priceContainer}>
            <AppText weight="bold" style={styles.price}>
              $ {item.price}
            </AppText>
            <AppText
              style={[styles.status, {color: getStatusColor(item.status)}]}>
              {item.status}
            </AppText>
          </View>
          <AppText weight="semiBold" style={styles.name}>
            {item.title}
          </AppText>
          <View style={styles.categoryContainer}>
            <View>
              <AppText style={styles.title}>Product</AppText>
              <AppText style={styles.product}>Furniture</AppText>
            </View>
            <View>
              <AppText style={styles.title}>Condition</AppText>
              <AppText style={styles.condition}>New</AppText>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <AppText style={styles.headerTitle}>My Ads</AppText>
        <View style={styles.classifiedButton}>
          <AppText style={styles.classifiedAppText}>Classified</AppText>
          <Image source={Icons.ArrowDown} style={styles.arrow} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <AppTextInput
          rightIcon={Icons.Search}
          placeholder={'Search...'}
          editable={false}
          containerStyle={styles.searchInputContainer}
          rightIconColor={Theme.placeholder}
        />
      </View>

      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}>
            <AppText
              style={[
                styles.tabAppText,
                selectedTab === tab && styles.activeTabAppText,
              ]}>
              {tab}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredAds}
        renderItem={renderAdItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.adsList}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

export default MyAdsScreen;
