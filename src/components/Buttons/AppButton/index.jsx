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

const AppButton = ({
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
        <ActivityIndicator color={Theme.black} />
      ) : (
        <>
          {icon ? (
            <Image source={icon} style={[styles.icon, iconStyle]} />
          ) : null}
          {children ? (
            <AppText weight="semiBold" style={[styles.title, titleStyle]}>
              {children}
            </AppText>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.secondary,
    width: vw * 70,
    height: ButtonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1.5,
    flexDirection: 'row',
    marginVertical: vh * 0.5,
  },
  icon: {
    height: vh * 2.6,
    width: vh * 2.6,
    resizeMode: 'contain',
    marginRight: vw * 1,
  },
  title: {
    fontSize: FontSize * 1.2,
    color: Theme.white,
  },
});
