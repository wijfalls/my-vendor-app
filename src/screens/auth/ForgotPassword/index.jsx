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
import {showErrorToast} from 'utils/Toast.util';
import * as Yup from 'yup';
import styles from './styles';
// import {forgotPassword} from 'api/index';

const initialValues = {
  email: formInitialValues.email,
};

const validationSchema = Yup.object().shape({
  email: formValidations.email,
});
const ForgotPassword = ({navigation}) => {
  const formRef = useRef();

  async function handleForgotPassowrd(data, {setSubmitting}) {
    // try {
    //   await forgotPassword(data);
    //   navigation.navigate('Verification', {
    //     forgotPassword: true,
    //     ...data,
    //   });
    // } catch (error) {
    //   showErrorToast(error);
    // } finally {
    //   setSubmitting(false);
    // }
    navigation.navigate('Verification', {
      forgotPassword: true,
      ...data,
    });
  }
  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <ContainerWrapper style={styles.container}>
        <View style={styles.headingContainer}>
          <AppText weight="bold" style={styles.heading}>
            Password Recovery
          </AppText>
          <AppText style={styles.subHeading}>
            Enter email address to get a verification code
          </AppText>
        </View>

        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleForgotPassowrd}>
          {({handleSubmit, isSubmitting}) => (
            <>
              <AppTextInput
                label="Enter Your Email Address*"
                name={formNames.email}
                containerStyle={styles.textInput}
                placeholder="Email"
                onSubmitEditing={handleSubmit}
                keyboardType="email-address"
              />

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
  );
};

export default ForgotPassword;
