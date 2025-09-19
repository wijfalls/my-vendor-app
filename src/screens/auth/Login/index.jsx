import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton, TextButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import {ContainerWrapper} from 'components/Wrapper';
import {Formik} from 'formik';
import React, {useEffect, useRef, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {useDispatch, useSelector} from 'react-redux';
import {
  formInitialValues,
  formNames,
  formValidations,
} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import * as Yup from 'yup';
import styles from './styles';

const initialValues = {
  email: formInitialValues.email,
  password: formInitialValues.password,
  role: 'user',
};

const validationSchema = Yup.object().shape({
  email: formValidations.email,
  password: formValidations.password,
});
const Login = ({navigation}) => {
  const formRef = useRef();
  // const saveCredentials = useSelector(selectRememberMe);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [rememberMe, setRememberMe] = useState(false);

  async function handleLogin(data, {setSubmitting}) {
    // try {
    //   await dispatch(LoginUser({...data, deviceToken: 'ds'})).unwrap();
    //   if (rememberMe) {
    //     saveRememberMe(data);
    //   } else {
    //     saveRememberMe({email: '', password: ''});
    //   }
    //   formRef?.current?.resetForm();
    // } catch (error) {
    //   showErrorToast(error);
    // } finally {
    //   setSubmitting(false);
    // }
    navigation.navigate('MainNavigation');
  }

  useEffect(() => {
    // if (saveCredentials?.email && saveCredentials?.password) {
    //   formRef.current.setValues(e => ({
    //     ...e,
    //     email: saveCredentials?.email,
    //     password: saveCredentials?.password,
    //   }));
    // }
  }, []);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <ContainerWrapper style={styles.container}>
        <View style={styles.headingContainer}>
          <AppText weight="bold" style={styles.heading}>
            Login To Your Account
          </AppText>
        </View>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({handleSubmit, isSubmitting}) => (
            <>
              <AppTextInput
                label={'Email*'}
                name={formNames.email}
                containerStyle={styles.textInput}
                placeholder="Email*"
                ref={emailRef}
                onSubmitEditing={() => passwordRef?.current?.focus()}
                keyboardType="email-address"
              />
              <AppTextInput
                label={'Password*'}
                name={formNames.password}
                containerStyle={styles.textInput}
                placeholder="Password*"
                secureTextEntry
                ref={passwordRef}
                onSubmitEditing={handleSubmit}
              />
              <View style={styles.forgotPasswodContainer}>
                <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  style={styles.rememberMeContainer}>
                  <View style={styles.checkbox}>
                    {rememberMe && (
                      <Image source={Icons.Check} style={styles.check} />
                    )}
                  </View>
                  <AppText
                    // onPress={() => navigation.navigate('ForgotPassword')}
                    style={styles.rememberMe}
                    color={Theme.black}>
                    Remember Me
                  </AppText>
                </TouchableOpacity>
                <TextButton
                  onPress={() => navigation.navigate('ForgotPassword')}
                  titleStyle={styles.forgotpassText}
                  containerStyle={styles.forgotPasswordText}
                  color={Theme.primary}>
                  Forgot Password?
                </TextButton>
              </View>
              <AppButton
                isLoading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit}
                containerStyle={styles.siginBtn}>
                Sign In
              </AppButton>
              {/* <View style={styles.orContainer}>
                <View style={styles.line} />
                <AppText weight="medium" style={styles.colorWhite}>
                  Or Continue With
                </AppText>
                <View style={styles.line} />
              </View> */}
              {/* <AppText weight="bold">Or Continue With</AppText> */}
              {/* <View style={styles.socialContainer}>
                <View style={styles.socialBtn}>
                  <Image source={Icons.Facebook} style={styles.socialIcon} />
                </View>
                <View style={styles.socialBtn}>
                  <Image source={Icons.Google} style={styles.socialIcon} />
                </View>
                <View style={styles.socialBtn}>
                  <Image source={Icons.Apple} style={styles.socialIcon} />
                </View>
              </View> */}
            </>
          )}
        </Formik>

        <View style={styles.loginContainer}>
          <AppText style={styles.haveAccountText}>
            Don't Have An Account?{' '}
          </AppText>
          <TextButton
            titleStyle={styles.haveAccountText}
            onPress={() => navigation.navigate('Signup')}
            color={Theme.black}>
            Sign Up
          </TextButton>
        </View>
      </ContainerWrapper>
    </KeyboardAwareScrollView>
  );
};

export default Login;
