import {Icons} from 'assets/images';
import {AppButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import React, {useImperativeHandle, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';
import AppText from '../AppText';

const FilterModal = React.forwardRef(
  (
    {
      icon = Icons.roundCheck,
      setFilters = () => {},
      filters,
      onClose = () => {},
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
        <TouchableOpacity style={styles.wrapper} onPress={hide} />
        <>
          <View style={styles.backdropContainer}>
            <View style={styles.innerContainer}>
              <AppText
                weight="semiBold"
                style={[styles.whiteFont, styles.title]}>
                Filter By
              </AppText>
              <View style={styles.divider} />
              <View style={styles.listContainer}>
                <AppTextInput
                  label="Service"
                  placeholder="Select Service"
                  containerStyle={styles.contentContainer}
                  rightIcon={Icons.ArrowDown}
                />

                <AppTextInput
                  label="Sub Service"
                  placeholder="Select Sub Service"
                  containerStyle={styles.contentContainer}
                  rightIcon={Icons.ArrowDown}
                />

                <View style={styles.row}>
                  <AppButton
                    containerStyle={styles.btnContainer}
                    titleStyle={styles.btnTitle}
                    onPress={() => setVisible(false)}>
                    Reset
                  </AppButton>
                  <AppButton
                    containerStyle={[styles.btnContainer, styles.btn]}
                    titleStyle={styles.btnTitle}
                    onPress={() => setVisible(false)}>
                    Apply
                  </AppButton>
                </View>
              </View>
            </View>
          </View>
        </>
      </Modal>
    );
  },
);

export default FilterModal;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 100,
    width: vw * 100,
    backgroundColor: `${Theme.black}DD`,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backdropContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  innerContainer: {
    width: '100%',
    alignSelf: 'center',
    borderTopRightRadius: vh * 4,
    borderTopLeftRadius: vh * 4,
    paddingVertical: vh * 2,
    shadowColor: `${Theme.shadowColor}44`,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 11,
    backgroundColor: Theme.white,
  },
  iconContainer: {
    // backgroundColor: Theme.white,
    width: vh * 8,
    height: vh * 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 5,
    shadowColor: `${Theme.shadowColor}77`,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 11,
    marginBottom: vh * 1,
  },
  whiteFont: {
    color: Theme.black,
  },
  title: {fontSize: FontSize * 1.8, textAlign: 'center'},
  divider: {
    height: 1,
    backgroundColor: Theme.border,
    width: vw * 100,
    marginVertical: vh * 2,
  },
  listContainer: {
    paddingHorizontal: vw * 4,
  },
  ratingTile: {
    width: vw * 14.5,
  },
  tile: {
    width: vw * 30,
    alignItems: 'center',
    paddingVertical: vh,
    backgroundColor: Theme.white,
    borderWidth: 1,
    borderColor: Theme.white,
  },
  heading: {
    fontSize: FontSize * 1.6,
    marginBottom: vh,
  },
  contentContainer: {
    gap: 5,
    marginBottom: vh * 2,
  },
  text: {fontSize: FontSize * 1.4},
  priceTile: {width: vw * 45},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: vw * 92,
  },
  btnContainer: {width: vw * 44, backgroundColor: Theme.grayBG},
  btnTitle: {color: Theme.black},
  btn: {backgroundColor: Theme.primary},
});
