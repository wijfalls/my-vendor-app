import {Icons} from 'assets/images';
import {ButtonHeight, FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import {useFormikContext} from 'formik';
import React, {useState} from 'react';
import Text from 'components/AppText';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import AppText from 'components/AppText';

const AppTextInput = React.forwardRef(
  (
    {
      name,
      label,
      placeholder,
      placeholderTextColor = Theme.placeholder,
      keyboardType,
      onChangeText,
      value,
      secureTextEntry,
      rightIcon,
      leftIcon,
      onRightIconPress,
      leftIconStyle,
      style,
      containerStyle,
      inputContainerStyle,
      numberOfLines = 4,
      error,
      rightIconColor,
      labelStyle,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(secureTextEntry);
    const formik = name ? useFormikContext() : {};
    const inputProps = {
      ...props,
      ref,
      placeholder,
      placeholderTextColor,
      style: [styles.input, style],
      secureTextEntry: showPassword,
      keyboardType,
      onChangeText: name ? formik?.handleChange(name) : onChangeText,
      value: name ? formik?.values?.[name] : value,
    };
    const errorName =
      name && formik?.touched?.[name] && formik?.errors?.[name]
        ? formik.errors[name]
        : null;

    const errorParent =
      props.parent &&
      formik?.touched?.[props.parent] &&
      formik?.touched?.[props.parent]?.[props.index] &&
      formik?.errors?.[props.parent] &&
      formik?.errors?.[props.parent]?.[props.index]
        ? formik.errors[props.parent][props.index]
        : null;
    function handleEyeIconPress() {
      setShowPassword(e => !e);
    }
    return (
      <View style={[styles.mainContainer, containerStyle]}>
        {label && (
          <AppText weight="medium" style={[styles.label, labelStyle]}>
            {label}
          </AppText>
        )}
        <View style={[styles.container, inputContainerStyle]}>
          {leftIcon ? (
            <View disabled={!onRightIconPress} onPress={onRightIconPress}>
              <Image
                source={leftIcon}
                style={[styles.leftIcon, leftIconStyle]}
              />
            </View>
          ) : null}

          <TextInput {...inputProps} />
          {secureTextEntry ? (
            showPassword ? (
              <TouchableOpacity onPress={handleEyeIconPress}>
                <Image source={Icons.EyeOff} style={styles.rightIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleEyeIconPress}>
                <Image source={Icons.EyeOn} style={styles.rightIcon} />
              </TouchableOpacity>
            )
          ) : rightIcon ? (
            <TouchableOpacity
              disabled={!onRightIconPress}
              onPress={onRightIconPress}>
              <Image
                source={rightIcon}
                style={[
                  styles.rightIcon,
                  rightIconColor && {tintColor: rightIconColor},
                ]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {errorName || errorParent || error ? (
          <Text style={styles.errorText}>
            {errorName || errorParent || error}
          </Text>
        ) : null}
      </View>
    );
  },
);

export default AppTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    // backgroundColor: Theme.white,
    marginBottom: vh * 4,
  },
  label: {
    marginBottom: vh,
    marginLeft: vw * 2,
    fontSize: FontSize * 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Theme.border,
    // borderWidth: 1,
    borderRadius: vh * 1.5,
    width: '100%',
    height: ButtonHeight * 1,
    backgroundColor: Theme.cardBG,
    marginBottom: vh * 1,
  },
  input: {
    height: '100%',
    flex: 1,
    marginHorizontal: vw * 3,
    fontSize: FontSize,
    color: Theme.black,
  },
  rightIcon: {
    height: vh * 2.2,
    width: vh * 2.2,
    resizeMode: 'contain',
    marginHorizontal: vw * 3,
    tintColor: Theme.primary,
  },
  leftIcon: {
    height: vh * 2.2,
    width: vh * 2.2,
    resizeMode: 'contain',
    marginLeft: vw * 3,
  },
  errorText: {
    color: 'red',
  },
});
