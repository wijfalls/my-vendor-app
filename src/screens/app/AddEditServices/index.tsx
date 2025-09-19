import {Icons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton} from 'components/Buttons';
import {AppTextInput} from 'components/Input';
import {ContainerWrapper} from 'components/Wrapper';
import {Formik} from 'formik';
import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import styles from './styles';
import {vh} from 'utils/Constants.util';
import {AlertModal} from 'components/Modals';

const initialValues = {
  service: '',
  subService: '',
  event: '',
  email: '',
  phone: '',
  description: '',
  pricing: '',
};

const validationSchema = Yup.object().shape({
  // service: Yup.string().required('Service is required'),
  // subService: Yup.string().required('Sub Service is required'),
  // event: Yup.string().required('Event is required'),
  // email: Yup.string().email('Invalid email').required('Email is required'),
  // phone: Yup.string().required('Phone is required'),
  // description: Yup.string().required('Description is required'),
  // pricing: Yup.string().required('Pricing is required'),
});

const AddEditServices = ({navigation, route}) => {
  const data = route.params?.data;
  const formRef = useRef();
  const successPopupRef = useRef();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: data ? 'Edit Services' : 'Add Services',
    });
  }, []);
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      showsVerticalScrollIndicator={false}>
      <ContainerWrapper style={styles.container}>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            successPopupRef.current.show();
          }}>
          {({handleSubmit, isSubmitting}) => (
            <View>
              <AppText weight="medium" style={styles.label}>
                Select Services
              </AppText>
              <AppTextInput
                name="service"
                containerStyle={styles.textInput}
                placeholder="Select Service"
                rightIcon={Icons.ArrowDown}
                editable={false}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppText weight="medium" style={styles.label}>
                Select Sub Services
              </AppText>
              <AppTextInput
                name="subService"
                containerStyle={styles.textInput}
                placeholder="Select Sub Service"
                rightIcon={Icons.ArrowDown}
                editable={false}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppTextInput
                label="Price"
                name="price"
                containerStyle={styles.textInput}
                placeholder="Enter Pricing"
                keyboardType="numeric"
                inputContainerStyle={[styles.inputContainerStyle]}
              />
              <AppTextInput
                label="Services details"
                name="description"
                containerStyle={styles.textInput}
                placeholder="Write details here.."
                multiline
                inputContainerStyle={[
                  styles.inputContainerStyle,
                  {height: vh * 20},
                ]}
                style={{textAlignVertical: 'top'}}
              />
              <AppTextInput
                label="Images"
                containerStyle={styles.textInput}
                placeholder="Upload Images"
                rightIcon={Icons.Upload}
                editable={false}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppButton
                isLoading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit}
                containerStyle={styles.submitBtn}>
                Submit
              </AppButton>
            </View>
          )}
        </Formik>
      </ContainerWrapper>
      <AlertModal
        ref={successPopupRef}
        subTitle={
          data ? 'Service has been updated' : 'Service has been created'
        }
        btnTitle={'Ok'}
        onPress={() => navigation.goBack()}
      />
    </KeyboardAwareScrollView>
  );
};

export default AddEditServices;
