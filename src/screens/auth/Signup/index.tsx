import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton, TextButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import {AlertModal} from 'components/Modals';
import {ContainerWrapper} from 'components/Wrapper';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {Image, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  formInitialValues,
  formNames,
  formValidations,
} from 'utils/Constants.util';
import * as Yup from 'yup';
import styles from './styles';
import {Theme} from 'utils/Theme.util';

const initialValues = {
  fullName: formInitialValues.fullName,
  email: formInitialValues.email,
  phone: formInitialValues.phone,
  // address: formInitialValues.address,
  // country: formInitialValues.country,
  password: formInitialValues.password,
  confirmPassword: formInitialValues.confirmPassword,
};

const validationSchema = Yup.object().shape({
  fullName: formValidations.fullName,
  email: formValidations.email,
  phone: formValidations.phone,
  // address: formValidations.address,
  // country: formValidations.country,
  password: formValidations.password,
  confirmPassword: formValidations.confirmPassword,
});
const Signup = ({navigation}) => {
  const successPopupRef = useRef();
  const formRef = useRef();

  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const responseData = useRef(null);

  const [showCountryCodePicker, setShowCountryCodePicker] = useState(false);

  async function handleSignUp(data, {setSubmitting}) {
    // try {
    //   await signup(data);
    successPopupRef?.current?.show();
    //   formRef?.current?.resetForm();
    // } catch (error) {
    //   console.error(error);
    //   showErrorToast(error);
    // } finally {
    //   setSubmitting(false);
    // }
  }
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      showsVerticalScrollIndicator={false}>
      <ContainerWrapper style={styles.container}>
        <View style={styles.headingContainer}>
          <AppText weight="bold" style={styles.heading}>
            Create New Account
          </AppText>
        </View>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}>
          {({handleSubmit, isSubmitting}) => (
            <>
              <AppTextInput
                label={'User Name*'}
                name={formNames.fullName}
                containerStyle={styles.textInput}
                placeholder="Enter Name"
                onSubmitEditing={() => lastNameRef?.current?.focus()}
              />
              <AppTextInput
                label={'Email*'}
                name={formNames.email}
                containerStyle={styles.textInput}
                placeholder="Enter Email"
                ref={emailRef}
                onSubmitEditing={() => phoneRef?.current?.focus()}
                keyboardType="email-address"
                textContentType="emailAddress"
                rightIcon={Icons.Email}
              />
              {/* <AppTextInput
                label={'Phone*'}
                name={formNames.phone}
                containerStyle={styles.textInput}
                placeholder="Enter Phone Number"
                ref={emailRef}
                onSubmitEditing={() => phoneRef?.current?.focus()}
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                rightIcon={Icons.Phone}
                leftIcon={Icons.USFlag}
                leftIconStyle={styles.flagIcon}
              /> */}

              <AppTextInput
                label={'Password*'}
                name={formNames.password}
                containerStyle={styles.textInput}
                placeholder="Enter Password"
                secureTextEntry
                ref={passwordRef}
                onSubmitEditing={() => confirmPasswordRef?.current?.focus()}
              />
              <AppTextInput
                label={'Confirm Password*'}
                name={formNames.confirmPassword}
                containerStyle={styles.textInput}
                placeholder="Enter Confirm Password"
                secureTextEntry
                ref={confirmPasswordRef}
                onSubmitEditing={handleSubmit}
              />
              <AppButton
                isLoading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit}
                containerStyle={styles.siginBtn}>
                Sign Up
              </AppButton>
            </>
          )}
        </Formik>
        <View style={styles.loginContainer}>
          <AppText style={styles.haveAccountText}>
            Already have an account?{' '}
          </AppText>
          <TextButton
            titleStyle={styles.haveAccountText}
            onPress={() => navigation.navigate('Login')}
            color={Theme.black}>
            Login Now
          </TextButton>
        </View>
      </ContainerWrapper>

      <AlertModal
        ref={successPopupRef}
        subTitle={'Account created successfully'}
        btnTitle="Login"
        onPress={() => {
          successPopupRef?.current?.hide();
          navigation.goBack('Login');
        }}
      />
    </KeyboardAwareScrollView>
  );
};

export default Signup;
