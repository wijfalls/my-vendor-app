import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {ScreenWrapper} from 'components/Wrapper';
import VendorCard from 'components/VendorCard';
import {AppTextInput, SearchInput} from 'components/Input';
import {Icons} from 'assets/images';
import {Theme} from 'utils/Theme.util';
import {vh, vw} from 'utils/Constants.util';

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

const ServiceByCategory = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title + ' Service' ?? 'Service',
    });
  }, []);
  const renderItem = ({item}) => {
    return (
      <VendorCard
        data={item}
        onPress={() => navigation.navigate('ServiceDetails', {data: item})}
        onPressChat={() => {
          navigation.navigate('Chat');
        }}
        onPressCall={() => {}}
      />
    );
  };
  return (
    <ScreenWrapper>
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
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.row}
        numColumns={2}
      />
    </ScreenWrapper>
  );
};

export default ServiceByCategory;

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
    marginTop: vh * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw * 5,
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
});
