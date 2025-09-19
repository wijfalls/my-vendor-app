import {AppTextInput} from 'components/Input';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import {AppButton} from 'components/Buttons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ContactUs = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        {/* <AppTextInput
            // name={formNames.password}
            containerStyle={styles.textInput}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder="Email"

            // ref={passwordRef}
            // onSubmitEditing={handleSubmit}
          /> */}
        <AppTextInput
          // name={formNames.password}
          label="Name*"
          containerStyle={styles.textInput}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Enter Name"

          // ref={passwordRef}
          // onSubmitEditing={handleSubmit}
        />
        <AppTextInput
          // name={formNames.password}
          label="Email Address*"
          containerStyle={styles.textInput}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Enter Subject"

          // ref={passwordRef}
          // onSubmitEditing={handleSubmit}
        />
        <AppTextInput
          // name={formNames.password}
          label="Message*"
          containerStyle={styles.textInput}
          inputContainerStyle={styles.multilineInput}
          placeholder="Enter Message..."
          style={{textAlignVertical: 'top'}}
          // ref={passwordRef}
          // onSubmitEditing={handleSubmit}
        />

        <AppButton containerStyle={styles.editBtn}>Submit</AppButton>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ContactUs;
