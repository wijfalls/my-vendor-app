import AppText from 'components/AppText';
import {AppButton} from 'components/Buttons';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const PlanCard = ({
  name,
  price,
  duration,
  calSavePercent,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected && styles.selectedContainer]}>
      <View style={styles.leftContent}>
        <AppText
          weight="semiBold"
          style={[styles.title, selected && styles.selectedText]}>
          {name}
        </AppText>
      </View>
      <View style={styles.rightContent}>
        <AppText style={[styles.crossPrice, selected && styles.selectedText]}>
          ${(price * 1.3).toFixed(2)}
        </AppText>
        <AppText
          weight="bold"
          style={[styles.price, selected && styles.selectedText]}>
          ${price}
        </AppText>
        <AppText style={[styles.duration, selected && styles.selectedText]}>
          {duration + 'ly'}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: vw * 4,
    borderColor: Theme.border,
    paddingHorizontal: vw * 4,
    paddingVertical: vh * 1,
    marginVertical: vh,
    width: '90%',
    alignSelf: 'center',
  },
  selectedContainer: {
    backgroundColor: Theme.primary,
    borderColor: Theme.primary,
    paddingVertical: vh * 1,
  },
  leftContent: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: FontSize * 1.7,
  },
  crossPrice: {
    fontSize: FontSize,
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: FontSize * 2,
    // marginVertical: vh,
  },
  duration: {
    fontSize: FontSize,
    textTransform: 'capitalize',
  },
  selectedText: {
    color: Theme.white,
  },
});
