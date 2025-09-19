import {Backgrounds, Icons} from 'assets/images';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import React, {useImperativeHandle, useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppButton} from '../Buttons';
import AppText from '../AppText';

const AlertModal = React.forwardRef(
  (
    {
      icon,
      title,
      subTitle,
      btnTitle,
      onPress,
      secondaryBtnTitle,
      onSecondaryBtnPress,
      onClose = () => {},
      children,
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false);
    useImperativeHandle(
      ref,
      () => ({
        show: () => setVisible(true),
        hide,
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );
    const hide = () => {
      setVisible(false);
      if (onClose && typeof onClose === 'function') {
        onClose();
      }
    };
    return (
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={hide}>
        {/* <ImageBackground source={Backgrounds.ModalBG} style={styles.wrapper} /> */}
        <TouchableOpacity style={styles.wrapper} onPress={hide} />
        <>
          <View style={styles.backdropContainer}>
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.closeBtn} onPress={hide}>
                <Image source={Icons.Cross} style={styles.crossIcon} />
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <Image source={icon ?? Icons.PopupCheck} style={styles.icon} />
              </View>
              {title ? (
                <AppText
                  font="Inter"
                  weight="bold"
                  style={[styles.title, icon && styles.iconTitle]}>
                  {title}
                </AppText>
              ) : null}

              {subTitle ? (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              ) : null}
              {children}
              <View style={styles.btnsRowContainer}>
                {secondaryBtnTitle ? (
                  <AppButton
                    containerStyle={[
                      styles.btnContainer,
                      styles.secondaryBtn,
                      styles.smallBtn,
                    ]}
                    titleStyle={styles.secondaryBtnText}
                    onPress={onSecondaryBtnPress}>
                    {secondaryBtnTitle}
                  </AppButton>
                ) : null}
                {btnTitle ? (
                  <AppButton
                    containerStyle={[
                      styles.btnContainer,
                      secondaryBtnTitle && styles.smallBtn,
                    ]}
                    onPress={onPress}>
                    {btnTitle}
                  </AppButton>
                ) : null}
              </View>
              <TouchableOpacity
                onPress={hide}
                activeOpacity={0.7}
                style={styles.closeIconContainer}>
                <Image source={Icons.Close} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      </Modal>
    );
  },
);

export default AlertModal;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 100,
    width: vw * 100,
    backgroundColor: Theme.primary + '94',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backdropContainer: {
    // backgroundColor: Theme.primary,
    // borderTopColor: Theme.secondary,
    // borderBottomColor: Theme.secondary,
    // borderTopWidth: 6,
    // borderBottomWidth: 6,
    height: '100%',
    width: '80%',
    alignSelf: 'center',
    paddingVertical: vh * 0.7,
    borderRadius: vh * 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: vh * 30,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.white,
    width: '100%',
    alignSelf: 'center',
    borderRadius: vh * 2,
    paddingVertical: vh * 3,
    shadowColor: `${Theme.shadowColor}44`,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 11,
  },
  iconContainer: {
    // backgroundColor: Theme.black,
    width: vh * 6.6,
    height: vh * 6.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 5,

    marginBottom: vh * 3,
  },
  icon: {
    // tintColor: Theme.white,
    width: vh * 8,
    height: vh * 8,
    resizeMode: 'contain',
  },
  btnContainer: {
    width: '50%',
    marginTop: vh * 3,
    height: vh * 5.5,
  },
  title: {
    textAlign: 'center',
    fontSize: FontSize * 1.2,
    width: '70%',
    // marginTop: vh * 1,
    marginBottom: vh * 0.5,
    // color: Theme.statusGreen,
  },
  subTitle: {
    width: '80%',
    textAlign: 'center',
    fontSize: FontSize * 1.2,
    textTransform: 'capitalize',
  },
  btnsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallBtn: {
    width: vw * 30,
    marginHorizontal: vw * 2,
  },
  secondaryBtn: {
    backgroundColor: Theme.primary,
  },
  secondaryBtnText: {
    color: Theme.white,
  },

  closeIconContainer: {
    position: 'absolute',
    top: vh * 2,
    right: vw * 5,
  },
  crossIcon: {
    height: vh * 2,
    width: vh * 2,
    tintColor: Theme.black,
    marginBottom: vh * 2,
    // // position: 'absolute',
    // right: vw * 5,
  },
  closeBtn: {
    position: 'absolute',
    top: vh * 2,
    right: vw * 5,
  },
  iconTitle: {
    color: Theme.statusRed,
  },
});
