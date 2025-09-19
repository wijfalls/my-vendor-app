import AppText from 'components/AppText';
import {WrapperWithHeader} from 'components/Wrapper';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View, Image, TouchableOpacity} from 'react-native';
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
  location: '',
  currentInterest: '',
  currentPreference: '',
  interests: [],
  preferences: [],
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  location: Yup.string().required('Location is required'),
  interests: Yup.array().min(1, 'Add at least one interest'),
  preferences: Yup.array().min(1, 'Add at least one preference'),
});
const EditProfile = ({navigation, route}) => {
  const successPopupRef = useRef();
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
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.boxContainer}>
          <View style={styles.profileContainer}>
            <Image source={Icons.EditProfile} style={styles.editIcon} />
            <Image
              source={Backgrounds.ProfilePlaceholder}
              style={styles.profile}
            />
          </View>
          {/* <AppText weight="bold" style={styles.nameText}>
            James
          </AppText>
          <AppText style={styles.subName}>lorem lipsum</AppText> */}
          {/* <AppTextInput
              // name={formNames.password}
              label={'Full Name'}
              containerStyle={[styles.textInput]}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Full Name"
              value={'Alex'}
            /> */}
          <View>
            <AppTextInput
              // name={formNames.password}
              label={'Email'}
              containerStyle={[styles.textInput]}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Email"
              value={'casey.hunter@gmail.com'}
            />
            <AppTextInput
              // name={formNames.password}
              label={'Name'}
              containerStyle={[styles.textInput]}
              inputContainerStyle={styles.inputContainerStyle}
              placeholder="Full Name"
              value={'Casey Hunter'}
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
              leftIcon={Icons.USFlag}
              leftIconStyle={styles.flagIcon}
              inputContainerStyle={styles.inputContainerStyle}
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
              label={'Documents'}
              containerStyle={styles.textInput}
              placeholder="uploads"
              rightIcon={Icons.Upload}
              inputContainerStyle={[styles.inputContainerStyle]}
            />
            <AppButton containerStyle={styles.submitBtn}>Update</AppButton>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <AlertModal
        ref={successPopupRef}
        title={'Your profle has been updated successfully.'}
        btnTitle={'Ok'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default EditProfile;
