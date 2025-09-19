import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import {ContainerWrapper} from 'components/Wrapper';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import styles from './styles';
import {vh} from 'utils/Constants.util';
import {AlertModal} from 'components/Modals';

const initialValues = {
  description: '',
};

const validationSchema = Yup.object().shape({
  // description: Yup.string().required('Description is required'),
});

const CompleteProfile = ({navigation}) => {
  const formRef = useRef();
  const subscriptionModal = useRef();

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      showsVerticalScrollIndicator={false}>
      <ContainerWrapper style={styles.container}>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {
            subscriptionModal.current.show();
          }}>
          {({handleSubmit, isSubmitting, setFieldValue, values}) => (
            <View>
              <AppText weight="medium" style={styles.label}>
                About
              </AppText>
              <AppTextInput
                name="description"
                containerStyle={styles.textInput}
                placeholder="Write Here..."
                multiline
                inputContainerStyle={[
                  styles.inputContainerStyle,
                  {height: vh * 20},
                ]}
                style={{textAlignVertical: 'top'}}
              />
              <AppText weight="medium" style={styles.label}>
                Year of experience
              </AppText>
              <AppTextInput
                containerStyle={styles.textInput}
                placeholder="Enter year of experience"
                inputContainerStyle={[styles.inputContainerStyle]}
              />
              <AppText weight="medium" style={styles.label}>
                Phone Number{' '}
              </AppText>
              <AppTextInput
                containerStyle={styles.textInput}
                placeholder="Enter phone number"
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppText weight="medium" style={styles.label}>
                Documents
              </AppText>
              <AppTextInput
                containerStyle={styles.textInput}
                placeholder="uploads"
                rightIcon={Icons.Upload}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppButton
                // isLoading={isSubmitting}
                // disabled={isSubmitting}
                onPress={handleSubmit}
                containerStyle={styles.submitBtn}>
                Complete
              </AppButton>
            </View>
          )}
        </Formik>
      </ContainerWrapper>
      <AlertModal
        ref={subscriptionModal}
        icon={Icons.Warning}
        title={'Your Profile is Under Review!'}
        subTitle={`You profile is currently under review. We will email you once it has been approved. Thank you for your patience.`}
        onClose={() => navigation.goBack()}
        // btnTitle={'Complete Now'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardAwareScrollView>
  );
};

export default CompleteProfile;
