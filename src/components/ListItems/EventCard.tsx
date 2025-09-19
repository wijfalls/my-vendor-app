import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icons} from 'assets/images';
import {Theme} from 'utils/Theme.util';
import fonts from 'assets/fonts';
import AppText from 'components/AppText';
import {AppButton} from 'components/Buttons';
import {vh} from 'utils/Constants.util';

const ToDo = ({
  title,
  city,
  address,
  startTime,
  endTime,
  onDelete,
  onEdit,
  onStatusChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
            <Image source={Icons.Delete} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
            <Image source={Icons.Edit} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <AppText style={styles.description}>{city}</AppText>
      <AppText weight="light" style={styles.address}>
        Address: {address}
      </AppText>
      <View style={styles.timeCon}>
        <AppText style={styles.dueDate}>13:00 PM</AppText>
        <View style={styles.seperator} />

        <AppText style={styles.dateAppText}>15:00 PM </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: Theme.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 12,
  },
  title: {
    fontSize: 18,
    color: Theme.black,
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 4,
    marginLeft: 2,
  },
  icon: {
    width: 20,
    height: 20,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
  },
  dueDate: {
    fontSize: 14,
    marginBottom: 16,
    color: Theme.placeholder,
  },
  dateAppText: {
    color: Theme.placeholder,
  },
  button: {
    marginTop: 8,
    width: '100%',
  },
  statusContainer: {
    backgroundColor: Theme.primary,
    padding: 8,
    marginBottom: 16,
    width: '30%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: vh * 8,
    alignItems: 'center',
  },
  status: {
    color: Theme.white,
    textTransform: 'uppercase',
  },
  seperator: {
    height: vh * 2.2,
    width: 1,
    backgroundColor: Theme.grayText,
    marginHorizontal: 10,
  },
  timeCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh * 1,
    width: '50%',
  },
});

export default ToDo;
