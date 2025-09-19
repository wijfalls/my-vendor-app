import {Backgrounds} from 'assets/images';
import React, {useRef, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import AppText from 'components/AppText';
import AppButton from 'components/Buttons/AppButton';
import {vh, vw} from 'utils/Constants.util';

const data = [
  {
    image: Backgrounds.Onboarding1,
    title: 'Find Reliable Vendors',
    description:
      'Discover trusted professionals for all your needs, ensuring convenience and quality connections to make your life easier',
  },
  {
    image: Backgrounds.Onboarding2,
    title: 'Buy & Sell with Ease',
    description:
      'Post your items for sale or browse listings from fellow community members.',
  },
  {
    image: Backgrounds.Onboarding3,
    title: 'Lost And Found Something',
    description:
      'Help your community by sharing lost and found items in just a few clicks',
  },
];

const Onboarding = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNextPress = () => {
    if (activeIndex < data.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      flatListRef.current.scrollToIndex({index: newIndex});
    } else {
      navigation.navigate('SocialLogin');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.page}>
            <Image source={item.image} style={styles.image} />
            <View style={{paddingHorizontal: vw * 5, marginTop: vh * 10}}>
              <AppText weight="bold" style={styles.welcomText}>
                {item.title}
              </AppText>
              {/* <AppText weight="medium" style={styles.title}>
              {item.title}
            </AppText> */}
              <AppText style={styles.description}>{item.description}</AppText>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          setActiveIndex(index);
        }}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          containerStyle={styles.secondaryBtn}
          titleStyle={styles.blackText}
          onPress={() => navigation.navigate('SocialLogin')}>
          Skip
        </AppButton>
        <AppButton onPress={handleNextPress} containerStyle={styles.btn}>
          Next
        </AppButton>
      </View>
    </View>
  );
};

export default Onboarding;
