import fonts from 'assets/fonts';
import {Backgrounds, Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton, TextButton} from 'components/Buttons';
import SocialButton from 'components/Buttons/SocialButton';
import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const SocialLogins = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Backgrounds.SocialLogo} style={styles.image} />
      <AppText weight="bold" style={styles.title}>
        Let’s Get Started!
      </AppText>
      {/* <SocialButton icon={Icons.Facebook}>
                Continue With Facebook
            </SocialButton> */}
      <SocialButton icon={Icons.Google}>Continue With Google</SocialButton>
      <SocialButton icon={Icons.Apple}>Continue With Apple</SocialButton>
      <SocialButton icon={Icons.Facebook}>Continue With Facebook</SocialButton>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <AppText weight="medium" style={styles.colorWhite}>
          Or
        </AppText>
        <View style={styles.line} />
      </View>

      <AppButton
        containerStyle={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        Sign In With Password
      </AppButton>
      <View style={styles.signupText}>
        <AppText style={styles.haveAccountText}>
          Don't have an account? 
        </AppText>
        <TextButton
          onPress={() => navigation.navigate('Signup')}
          color={Theme.secondary}
          titleStyle={[styles.haveAccountText, styles.primaryColor]}>
          Sign Up
        </TextButton>
      </View>
      {/* <TextButton
        onPress={() => navigation.navigate('MainNavigation')}
        color={Theme.secondary}
        titleStyle={[styles.haveAccountText, styles.guest]}>
        Guest User
      </TextButton> */}
    </View>
  );
};

export default SocialLogins;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: vh * 1.6,
    paddingHorizontal: vw * 5,
  },
  title: {
    fontSize: vh * 4,
    marginBottom: vh * 2,
    color: Theme.black,
  },
  image: {
    height: vh * 25,
    width: vw * 65,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: vh * 4,
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    width: vw * 70,
  },
  signupText: {
    flexDirection: 'row',
    marginBottom: vh,
    alignSelf: 'center',
  },
  haveAccountText: {
    fontSize: FontSize * 1.2,
    color: Theme.black,
  },
  loginBtn: {
    marginBottom: vh * 6,
    width: vw * 90,
  },
  colorWhite: {
    marginVertical: vh,
    fontSize: vh * 2,
    color: Theme.grayText,
  },
  primaryColor: {
    color: Theme.primary,
    fontFamily: fonts.Raleway.SemiBold,
  },
  line: {
    height: 1,
    width: vw * 38,
    backgroundColor: Theme.grayText,
    alignSelf: 'center',
    marginVertical: vh * 2,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vh * 2,
    width: vw * 90,
  },
  guest: {
    marginTop: vh * 2,
  },
});
