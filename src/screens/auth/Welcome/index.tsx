import {Backgrounds, Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton, TextButton} from 'components/Buttons';
import SocialButton from 'components/Buttons/SocialButton';
import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={Backgrounds.Welcome}>
      <Image source={Icons.Logo} style={styles.logo} />
      <View style={styles.content}>
        <AppText weight="bold" style={styles.title}>
          {'Nice To\n Meet You James'}
        </AppText>

        <AppText weight="medium" style={styles.colorWhite}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ipsum has been the industry's.
        </AppText>
      </View>
      <AppButton
        containerStyle={styles.loginBtn}
        onPress={() => navigation.navigate('MainNavigation')}>
        Done
      </AppButton>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: vw * 5,
    paddingTop: vh * 10,
  },
  content: {
    marginVertical: vh * 12,
  },
  title: {
    fontSize: vh * 4,
    marginBottom: vh * 2,
    color: Theme.white,
    textAlign: 'center',
  },
  image: {
    height: vh * 60,
    width: vw * 100,
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
  },
  haveAccountText: {
    fontSize: FontSize * 1.2,
  },
  logo: {
    height: vh * 18,
    width: vh * 18,
  },
  loginBtn: {
    // marginTop: vh * 6,
    width: vw * 75,
  },
  colorWhite: {
    marginVertical: vh,
    fontSize: vh * 2,
    color: Theme.white,
    textAlign: 'center',
  },
});
