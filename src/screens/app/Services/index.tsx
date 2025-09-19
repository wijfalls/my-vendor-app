import {Icons} from 'assets/images';
import CategoryItem from 'components/ListItems/CategoryItem';
import SectionTitle from 'components/SectionTitle';
import {ContainerWrapper, CurvedHeaderWrapper} from 'components/Wrapper';
import React, {useEffect, useRef} from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './styles';

import {AppTextInput} from 'components/Input';
import VendorCard from 'components/VendorCard';
import {Theme} from 'utils/Theme.util';
import {FilterModal} from 'components/Modals';

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
const Services = ({navigation}) => {
  const filterPopupRef = useRef();
  const renderItem = ({item}) => {
    return (
      <VendorCard
        data={item}
        onPress={() => navigation.navigate('ServiceDetails', {data: item})}
        onPressDelete={() => {
          navigation.navigate('Chat');
        }}
        onPressEdit={() => {
          navigation.navigate('AddEditServices', {data: item});
        }}
      />
    );
  };
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <AppTextInput
            rightIcon={Icons.Search}
            placeholder={'Search...'}
            editable={false}
            containerStyle={styles.searchInputContainer}
            rightIconColor={Theme.placeholder}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <TouchableOpacity onPress={() => filterPopupRef.current.show()}>
            <Image source={Icons.Filter} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        <SectionTitle title={'All Services'} />
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.row}
          numColumns={2}
        />
      </ScrollView>
      <FilterModal
        ref={filterPopupRef}
        btnTitle={'Ok'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Services;
