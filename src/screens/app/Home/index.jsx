import {Backgrounds, Icons} from 'assets/images';
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
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import ThreadItem from 'components/ListItems/ThreadItem';
import ArticleItem from 'components/ListItems/ArticleItem';
import {AlertModal, FilterModal} from 'components/Modals';
import AppText from 'components/AppText';
import {AppTextInput} from 'components/Input';
import ServiceTile from 'components/ListItems/ServiceTile';
import VendorCard from 'components/VendorCard';
import {AppButton} from 'components/Buttons';
import {Theme} from 'utils/Theme.util';

const eventData = [
  {
    title: 'Home',
    image:
      'https://blacklinerenovations.com/wp-content/uploads/2020/04/Blog-Living-in-Your-House-During-a-Remodel-10-Proven-Tips-Featured.jpg',
  },
  {
    title: 'Renovations',
    image:
      'https://media.istockphoto.com/id/1146295665/photo/renovation-of-studio-room.jpg?s=612x612&w=0&k=20&c=CCfo3IoDIqXmS_ZhihYfdd_5_M4RiBipuFBFUJY2SzA=',
  },
  {
    title: 'Plumber',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w5MS0YqOCc_Zp3ivSY4tr5Nukbyu2ucuYQ&s',
  },
  {
    title: 'Electrician',
    image:
      'https://media.istockphoto.com/id/1146295665/photo/renovation-of-studio-room.jpg?s=612x612&w=0&k=20&c=CCfo3IoDIqXmS_ZhihYfdd_5_M4RiBipuFBFUJY2SzA=',
  },
  {
    title: 'Mechanic',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7w5MS0YqOCc_Zp3ivSY4tr5Nukbyu2ucuYQ&s',
  },
];
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
const Home = ({navigation}) => {
  const subscriptionModal = useRef();
  const reviewPopup = useRef();
  const filterPopupRef = useRef();

  useEffect(() => {
    // reviewPopup.current.show();
    setTimeout(() => {
      subscriptionModal.current.show();
    }, 5000);
  }, []);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
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
        <View style={styles.profileContainer}>
          <View>
            <AppText weight="bold" style={styles.profileHeading}>
              Profile Information
            </AppText>
            <AppButton
              containerStyle={styles.completeBtn}
              onPress={() => navigation.navigate('CompleteProfile')}>
              Complete Now
            </AppButton>
          </View>
          <Image source={Backgrounds.Progress} style={styles.progress} />
        </View>
        <ImageBackground
          source={Backgrounds.PostCardBG}
          imageStyle={styles.postCard}
          style={styles.cardContainer}>
          <View style={{width: '50%'}}>
            <AppText weight="semiBold" style={styles.name}>
              Welcome Alex!
            </AppText>
            <AppText style={styles.text}>
              We’re excited to have you on board. Let’s get your business up &
              running-start by adding you first services!
            </AppText>
          </View>
          <AppButton
            containerStyle={styles.postBtn}
            titleStyle={styles.title}
            onPress={() => navigation.navigate('AddEditServices')}>
            Add Services
          </AppButton>
        </ImageBackground>
        {/* <SectionTitle
          title={'Browse Services'}
          showRightBtn
          onPressRight={() => navigation.navigate('Services')}
        /> */}
        {/* <FlatList
          data={eventData}
          renderItem={({item}) => {
            return (
              <ServiceTile
                data={item}
                image={item.image}
                title={item.title}
                onPress={() =>
                  navigation.navigate('ServiceByCategory', {
                    data: item,
                    title: item.title,
                  })
                }
              />
            );
          }}
          horizontal
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          style={styles.list}
        /> */}
        <SectionTitle title={'Recent Services'} />
        <View style={{width: '100%'}}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <VendorCard
                  data={item}
                  onPress={() =>
                    navigation.navigate('ServiceDetails', {data: item})
                  }
                  onPressChat={() => {
                    navigation.navigate('Chat');
                  }}
                  onPressCall={() => {}}
                />
              );
            }}
            columnWrapperStyle={styles.row}
            numColumns={2}
            keyExtractor={(item, index) => item + '' + index}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            // style={styles.list}
          />
        </View>
      </ScrollView>
      <AlertModal
        ref={reviewPopup}
        icon={Icons.Warning}
        title={'Please Complete Your Profile!'}
        subTitle={`Please add all necessary details to your profile so that the admin can review and approve it. Ensure your information is accurate and up-to date.`}
        btnTitle={'Complete Now'}
        onPress={() => {
          navigation.navigate('CompleteProfile');
        }}
      />
      <AlertModal
        ref={subscriptionModal}
        title={'Profile Approved 🎉'}
        subTitle={`Your profile has been successfully approved. To access advanced features like adding service or chat with user please purchase a subscription plan`}
        btnTitle={'Purchase Plan'}
        onPress={() => {
          subscriptionModal.current.hide();
          navigation.navigate('SubscriptionPlan');
        }}
      />
      <FilterModal
        ref={filterPopupRef}
        btnTitle={'Ok'}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default Home;
