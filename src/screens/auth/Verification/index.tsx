// import {verifyOtp} from 'api/index';
import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton, TextButton} from 'components/Buttons';
import {ContainerWrapper, ScreenWrapper} from 'components/Wrapper';
import {Formik} from 'formik';
import React, {useRef} from 'react';
import {Image, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  formInitialValues,
  formNames,
  formValidations,
} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import {showErrorToast, showSuccessToast} from 'utils/Toast.util';
import * as Yup from 'yup';
import styles from './styles';
import {AppTextInput} from 'components/Input';

const initialValues = {
  otp: formInitialValues.otp,
};

const validationSchema = Yup.object().shape({
  otp: formValidations.otp,
});
const Verification = ({navigation, route}) => {
  const isForgotPassord = route?.params?.forgotPassword;
  const email = route?.params?.email;
  const formRef = useRef();

  async function handleVerification(data, {setSubmitting}) {
    // try {
    //   await verifyOtp({otp: Number(data.otp), email});
    //   if (isForgotPassord) {
    //     navigation.navigate('PasswordRecovery', {
    //       otp: Number(data.otp),
    //       email,
    //     });
    //   }
    //   showSuccessToast('OTP Verified successfully');
    // } catch (error) {
    //   showErrorToast(error);
    // } finally {
    //   setSubmitting(false);
    // }
    navigation.navigate('PasswordRecovery', {
      otp: Number(data.otp),
      email,
    });
  }
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView enableOnAndroid>
        <ContainerWrapper style={styles.container}>
          <View style={styles.headingContainer}>
            <AppText weight="bold" style={styles.heading}>
              Password Recovery
            </AppText>
            <AppText style={styles.subHeading}>
              Please check your email for verification code. Your code is 6
              digit in length
            </AppText>
          </View>
          <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleVerification}>
            {({handleSubmit, isSubmitting, setValues, errors, touched}) => (
              <>
                <AppTextInput
                  label="Verification Code*"
                  name={formNames.otp}
                  containerStyle={styles.textInput}
                  placeholder="Enter Verification Code"
                  onSubmitEditing={handleSubmit}
                  keyboardType="number-pad"
                />
                <TextButton
                  containerStyle={styles.forgotPasswodContainer}
                  color={Theme.shadowColor}>
                  Didn't get a code
                </TextButton>

                <AppButton
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                  containerStyle={styles.siginBtn}>
                  Continue
                </AppButton>
              </>
            )}
          </Formik>
          {isForgotPassord ? (
            <View style={styles.loginContainer}>
              <TextButton
                titleStyle={styles.haveAccountText}
                onPress={() => navigation.navigate('Login')}
                color={Theme.black}>
                back to login
              </TextButton>
            </View>
          ) : null}
        </ContainerWrapper>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default Verification;
