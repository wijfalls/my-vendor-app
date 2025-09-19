import React, {useEffect} from 'react';
import {Image, SectionList, View} from 'react-native';
import {Theme} from 'utils/Theme.util';
import AppText from 'components/AppText';
import {Icons} from 'assets/images';
import {AppTextInput} from 'components/Input';
import {WrapperWithHeader} from 'components/Wrapper';
import fonts from 'assets/fonts';
import styles from './styles';
export default function ChatDetail({navigation, route}) {
  const DATA = [
    {
      title: 'Thursday 24, 2022',
      data: [
        {
          userType: 0,
          profileImage:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          message: 'Are you still travelling?',
        },
        {
          userType: 1,
          profileImage:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          message: 'Yes, i’m at Istanbul..',
        },
        {
          userType: 0,
          profileImage:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          message: 'OoOo, Thats so Cool!',
        },
        {
          userType: 0,
          profileImage:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          message: 'Raining??',
        },
      ],
    },
    {
      title: 'Sunday 27, 2022',
      data: [
        {
          userType: 0,
          profileImage:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          message: 'Hi, Did you heared?',
        },
        {
          userType: 0,
          profileImage:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
          message: 'Ok!',
        },
      ],
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {color: '#000', fontStyle: fonts.Raleway.Bold},
      // headerTitle: 'Alex',
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.renderItem,
          item?.userType == 1 && {
            justifyContent: 'flex-end',
          },
        ]}>
        {/* {item?.userType == 0 && (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item?.profileImage}}
              style={styles.imageStyle}
            />
          </View>
        )} */}
        <View
          style={[
            styles.messageContainer,
            item?.userType == 1 && styles.leftAlignMessageContainer,
          ]}>
          <AppText
            numberOfLines={1}
            style={[
              styles.messageTxt,
              item?.userType == 1 && styles.messageTxtRight,
            ]}>
            {item?.message}
          </AppText>
        </View>
        {/* {item?.userType == 1 && (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item?.profileImage}}
              style={styles.imageStyle}
            />
          </View>
        )} */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <WrapperWithHeader headerContainerStyle={styles.headerStyle}> */}
      {/* <View style={styles.profileContainer}>
                <Image
                    source={{
                        uri: 'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
                    }}
                    style={styles.profileImage}
                />
                <AppText weight="bold">Maria Smith John</AppText>
                <AppText weight="light">@mariasmithjohn/!</AppText>
            </View> */}

      <SectionList
        style={styles.sectionListStyle}
        sections={DATA}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.headerContainer}>
            <AppText style={styles.header}>{title}</AppText>
          </View>
        )}
      />
      <AppTextInput
        placeholder="Send Message"
        required
        rightIcon={Icons.Camera}
        style={{color: Theme.black}}
        inputContainerStyle={styles.textInputContainer}
        containerStyle={styles.Containerstyle}
        placeholderTextColor={Theme.placeholder}
        rightIconColor={Theme.placeholder}
      />
      {/* </WrapperWithHeader> */}
    </View>
  );
}
