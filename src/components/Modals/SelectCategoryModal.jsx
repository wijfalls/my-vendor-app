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
const SelectCategory = React.forwardRef(
  ({onPress, onClose = () => {}}, ref) => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        show: () => setVisible(true),
        hide,
      }),
      [],
    );

    const hide = type => {
      setVisible(false);
      if (onClose && typeof onClose === 'function' && !type) {
        onClose();
      }
    };

    return (
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        onRequestClose={hide}>
        <TouchableOpacity style={styles.wrapper} onPress={hide} />
        <View style={styles.backdropContainer}>
          <View style={styles.innerContainer}>
            <AppText weight="bold" style={styles.heading}>
              Select Category
            </AppText>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  onPress('lostfound');
                }}>
                <Image
                  source={Backgrounds.LostFound}
                  style={styles.optionIcon}
                />
                <AppText style={styles.optionText}>Lost And Found</AppText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  onPress('classified');
                }}>
                <Image
                  source={Backgrounds.ClassifiedIcon}
                  style={styles.optionIcon}
                />
                <AppText style={styles.optionText}>Classified Ads</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

export default SelectCategory;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Theme.primary + '94',
  },

  backdropContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  innerContainer: {
    backgroundColor: Theme.white,
    width: '100%',
    borderTopLeftRadius: vh * 2,
    borderTopRightRadius: vh * 2,
    paddingVertical: vh * 2,
  },

  heading: {
    fontSize: FontSize * 1.2,
    textAlign: 'center',
    marginTop: vh * 2,
    // marginBottom: vh * 2,
    color: Theme.black,
  },

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: vw * 5,
    height: vh * 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionItem: {
    alignItems: 'center',
    padding: vh * 2,
  },

  optionIcon: {
    width: vh * 15,
    height: vh * 15,
    resizeMode: 'contain',
  },

  optionText: {
    fontSize: FontSize,
    color: Theme.black,
    textAlign: 'center',
    marginTop: vh * 1,
  },
});
