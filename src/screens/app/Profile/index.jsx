import AppText from 'components/AppText';
import {ContainerWrapper, WrapperWithHeader} from 'components/Wrapper';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  TextStyle,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {AppTextInput, SearchInput} from 'components/Input';
import {
  categories,
  formNames,
  upcomingBookings,
  vh,
} from 'utils/Constants.util';
import {AppButton, TextButton} from 'components/Buttons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppDropDown} from 'components/DropDown';
import {Backgrounds, Icons} from 'assets/images';
import {AlertModal} from 'components/Modals';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Theme} from 'utils/Theme.util';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
});
const Profile = ({navigation, route}) => {
  const changePasswordPopupRef = useRef();
  const formRef = useRef();

  const handleAddItem = (field, value, setFieldValue) => {
    if (!value.trim()) return;

    const currentItems = formRef.current?.values[field] || [];
    setFieldValue(field, [...currentItems, value.trim()]);
    setFieldValue(
      `current${field.charAt(0).toUpperCase() + field.slice(1)}`,
      '',
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
    });
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Backgrounds.PostCardBG}
        imageStyle={styles.image}>
        <KeyboardAwareScrollView style={styles.contentContainer}>
          <View style={styles.boxContainer}>
            <Image
              source={Backgrounds.ProfilePlaceholder}
              style={styles.profile}
            />
            <AppText weight="semiBold" style={styles.nameText}>
              Casey Hunter
            </AppText>
            {/* <AppText weight="bold" style={styles.nameText}>
              James
            </AppText>
            <AppText style={styles.subName}>lorem lipsum</AppText> */}

            <AppTextInput
              // name={formNames.password}
              label={'Email'}
              containerStyle={[styles.textInput]}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Email"
              value={'casey.hunter@gmail.com'}
            />
            <AppTextInput
              label={'Phone*'}
              name={formNames.phone}
              containerStyle={styles.textInput}
              placeholder="Enter Phone Number"
              // ref={emailRef}
              // onSubmitEditing={() =>
              //     phoneRef?.current?.focus()
              // }
              keyboardType="number-pad"
              textContentType="telephoneNumber"
              rightIcon={Icons.Phone}
              value={'12582582582'}
              editable={false}
            />

            <AppTextInput
              label={'Description'}
              name="description"
              containerStyle={styles.textInput}
              placeholder="Write Here..."
              multiline
              inputContainerStyle={[
                styles.inputContainerStyle,
                {height: vh * 20},
              ]}
              style={{textAlignVertical: 'top'}}
            />

            <AppTextInput
              label={'Experience'}
              containerStyle={styles.textInput}
              placeholder="Enter year of experience"
              inputContainerStyle={[styles.inputContainerStyle]}
            />

            <AppTextInput
              label={'Phone*'}
              containerStyle={styles.textInput}
              placeholder="Enter phone number"
              inputContainerStyle={[styles.inputContainerStyle]}
            />

            <AppTextInput
              label={' Documents'}
              containerStyle={styles.textInput}
              placeholder="uploads"
              rightIcon={Icons.Upload}
              inputContainerStyle={[styles.inputContainerStyle]}
            />
            <TextButton
              titleStyle={{color: Theme.primary}}
              containerStyle={{alignSelf: 'flex-end'}}
              onPress={() => changePasswordPopupRef.current.show()}>
              Change Password
            </TextButton>
            <View style={styles.line} />
            <AppButton
              onPress={() => navigation.navigate('EditProfile')}
              containerStyle={styles.siginBtn}>
              Edit Profile
            </AppButton>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
      <AlertModal
        title={'Update Password'}
        ref={changePasswordPopupRef}
        btnTitle="Update"
        onPress={() => changePasswordPopupRef.current.hide()}>
        <View style={{padding: 10}}>
          <AppTextInput
            containerStyle={styles.textInput}
            placeholder="Current Password*"
            secureTextEntry
            inputContainerStyle={styles.inputContainerStyle}
            // ref={passwordRef}
            // onSubmitEditing={handleSubmit}
          />
          <AppTextInput
            // name={formNames.password}
            containerStyle={styles.textInput}
            placeholder="New Password*"
            secureTextEntry
            inputContainerStyle={styles.inputContainerStyle}

            // ref={passwordRef}
            // onSubmitEditing={handleSubmit}
          />
          <AppTextInput
            // name={formNames.password}
            containerStyle={styles.textInput}
            placeholder="Confirm your password*"
            secureTextEntry
            inputContainerStyle={styles.inputContainerStyle}

            // ref={passwordRef}
            // onSubmitEditing={handleSubmit}
          />
        </View>
      </AlertModal>
    </View>
  );
};

export default Profile;
