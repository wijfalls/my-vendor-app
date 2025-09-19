import {ScreenWrapper, WrapperWithHeader} from 'components/Wrapper';
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppTextInput} from 'components/Input';
import {AppButton} from 'components/Buttons';
import AppText from 'components/AppText';

const PrivacyPolicy = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={styles.innerContainer}>
        <AppText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis
        </AppText>
      </View>
    </ScreenWrapper>
  );
};

export default PrivacyPolicy;
