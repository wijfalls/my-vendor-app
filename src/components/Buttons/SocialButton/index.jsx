import AppText from 'components/AppText';
import {ButtonHeight, FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Fonts from 'assets/fonts';

const SocialButton = ({
  onPress,
  children,
  icon,
  titleStyle,
  iconStyle,
  containerStyle,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, containerStyle]}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator color={Theme.white} />
      ) : (
        <>
          {icon ? (
            <Image source={icon} style={[styles.icon, iconStyle]} />
          ) : null}
          {children ? (
            <AppText font="OpenSans" style={[styles.title, titleStyle]}>
              {children}
            </AppText>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.transparent,
    width: vw * 90,
    height: ButtonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1.5,
    flexDirection: 'row',
    marginVertical: vh,
    // shadowColor: `${Theme.black}44`,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // elevation: 3,
    borderWidth: 1,
    borderColor: Theme.border,
  },
  icon: {
    height: vh * 2.6,
    width: vh * 2.6,
    resizeMode: 'contain',
    marginRight: vw * 1,
  },
  title: {
    fontSize: FontSize * 1.1,
    color: Theme.black,
    fontFamily: Fonts.Raleway.Medium,
  },
});
