import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScreenWrapper} from 'components/Wrapper';
import VendorCard from 'components/VendorCard';
import {AppTextInput, SearchInput} from 'components/Input';
import {Icons} from 'assets/images';
import {Theme} from 'utils/Theme.util';
import {vh, vw} from 'utils/Constants.util';
import AppText from 'components/AppText';

const data = [
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

const ClassifiedAds = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('Classified Ads');

  const renderItem = ({item}) => {
    return (
      <VendorCard
        data={item}
        onPress={() => navigation.navigate('AdDetails', {data: item})}
        onPressChat={() => {
          navigation.navigate('Chat');
        }}
        onPressCall={() => {}}
      />
    );
  };
  return (
    <ScreenWrapper style={styles.contentContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Classified Ads' && styles.selectedTab,
          ]}
          onPress={() => setSelectedTab('Classified Ads')}>
          <AppText
            style={[
              styles.tabText,
              selectedTab === 'Classified Ads' && styles.selectedTabText,
            ]}>
            Classified Ads
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Community Ads' && styles.selectedTab,
          ]}
          onPress={() => setSelectedTab('Community Ads')}>
          <AppText
            style={[
              styles.tabText,
              selectedTab === 'Community Ads' && styles.selectedTabText,
            ]}>
            Community Ads
          </AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <AppTextInput
          rightIcon={Icons.Search}
          placeholder={'Search...'}
          editable={false}
          containerStyle={styles.searchInputContainer}
          rightIconColor={Theme.placeholder}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <TouchableOpacity>
          <Image source={Icons.Filter} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{gap: 16}}
        columnWrapperStyle={styles.row}
        numColumns={2}
      />
    </ScreenWrapper>
  );
};

export default ClassifiedAds;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    gap: 16,
  },
  row: {
    width: '100%',
    justifyContent: 'space-between',
    // height: vh * 80,
  },
  header: {
    // marginTop: vh * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: vw * 5,
    // marginBottom: 16,
  },
  searchInputContainer: {
    marginBottom: vh * 0.5,
    width: '82%',
    height: vh * 6,
  },
  filterIcon: {
    width: vh * 6,
    height: vh * 6,
  },
  inputContainerStyle: {
    height: vh * 6,
    borderWidth: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: vh * 1,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  tab: {
    paddingVertical: vh * 1.2,
    alignItems: 'center',
    width: vw * 45,
  },
  selectedTab: {
    backgroundColor: Theme.primary,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  selectedTabText: {
    color: '#FFF',
  },
});
