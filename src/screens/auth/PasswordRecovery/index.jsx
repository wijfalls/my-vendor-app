import {Icons} from 'assets/images';
import {AppButton, TextButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import AppText from 'components/AppText';
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
import {AlertModal} from 'components/Modals';
// import {resetPassword} from 'api/index';

const initialValues = {
  password: formInitialValues.password,
  confirmPassword: formInitialValues.confirmPassword,
};

const validationSchema = Yup.object().shape({
  password: formValidations.password,
  confirmPassword: formValidations.confirmPassword,
});
const PasswordRecovery = ({navigation, route}) => {
  const formRef = useRef();
  const successPopupRef = useRef();
  const otp = route?.params?.otp;
  const email = route?.params?.email;
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleSignUp(data, {setSubmitting}) {
    successPopupRef?.current?.show();

    // try {
    //   await resetPassword({...data, otp, email});
    //   formRef?.current?.resetForm();
    //   showSuccessToast('Password reset successfully');
    //   navigation.navigate('Login');
    // } catch (error) {
    //   showErrorToast(error);
    // } finally {
    //   setSubmitting(false);
    // }
  }
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView enableOnAndroid>
        <ContainerWrapper style={styles.container}>
          <AppText weight="bold" style={styles.heading}>
            Password Recovery
          </AppText>
          <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}>
            {({handleSubmit, isSubmitting}) => (
              <>
                <AppTextInput
                  label={'New Password*'}
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
                  Update
                </AppButton>
              </>
            )}
          </Formik>
          <View style={styles.loginContainer}>
            <TextButton
              titleStyle={styles.haveAccountText}
              onPress={() => navigation.navigate('Login')}
              color={Theme.black}>
              back to login
            </TextButton>
          </View>
        </ContainerWrapper>
      </KeyboardAwareScrollView>
      <AlertModal
        ref={successPopupRef}
        title={'Congratulations!'}
        subTitle={
          'Your password has been updated changed successfully. Use your new password to log in.'
        }
        btnTitle="Login"
        onPress={() => {
          successPopupRef?.current?.hide();
        }}
        onClose={() => {
          setTimeout(() => {
            // dispatch(saveUser(responseData?.current));
            navigation.navigate('Login');
          }, 500);
        }}
      />
    </ScreenWrapper>
  );
};

export default PasswordRecovery;
