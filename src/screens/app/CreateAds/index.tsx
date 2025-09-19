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
import SelectCategory from 'components/Modals/SelectCategoryModal';

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

const CreateAds = ({navigation, route}) => {
  const data = route.params?.data;
  const formRef = useRef();
  const successPopupRef = useRef();
  const categoryPopupRef = useRef();
  const [selectedType, setSelectedType] = React.useState(null);
  const handleOptionSelect = type => {
    console.log('Selected:', type); // Will log 'lostfound' or 'classified'
    // Handle the selection
    setSelectedType(type);
    categoryPopupRef.current.hide('onSelect');
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: data ? 'Edit Ad' : 'Post Ad',
    });
    if (!data) {
      categoryPopupRef.current.show();
    }
  }, [data]);
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
                Product Name*
              </AppText>
              <AppTextInput
                name="service"
                containerStyle={styles.textInput}
                placeholder="Type Product Name"
                editable={false}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppText weight="medium" style={styles.label}>
                Condition*
              </AppText>
              <AppTextInput
                name="subService"
                containerStyle={styles.textInput}
                placeholder="Type (used/new)"
                rightIcon={Icons.ArrowDown}
                editable={false}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              <AppText weight="medium" style={styles.label}>
                Category
              </AppText>
              <AppTextInput
                name="event"
                containerStyle={styles.textInput}
                placeholder="Product Category"
                rightIcon={Icons.ArrowDown}
                editable={false}
                inputContainerStyle={[styles.inputContainerStyle]}
              />

              {selectedType !== 'lostfound' && (
                <>
                  <AppText weight="medium" style={styles.label}>
                    Phone Number*
                  </AppText>
                  <AppTextInput
                    name="phone"
                    containerStyle={styles.textInput}
                    placeholder="Type Phone Number*"
                    keyboardType="numeric"
                    inputContainerStyle={[styles.inputContainerStyle]}
                  />
                  <AppText weight="medium" style={styles.label}>
                    Price*
                  </AppText>
                  <AppTextInput
                    name="phone"
                    containerStyle={styles.textInput}
                    placeholder="Enter Price"
                    keyboardType="phone-pad"
                    inputContainerStyle={[styles.inputContainerStyle]}
                  />
                </>
              )}

              <AppText weight="medium" style={styles.label}>
                Details*
              </AppText>
              <AppTextInput
                name="description"
                containerStyle={styles.textInput}
                placeholder="Enter details here"
                multiline
                inputContainerStyle={[
                  styles.inputContainerStyle,
                  {height: vh * 20},
                ]}
              />
              <AppText weight="medium" style={styles.label}>
                Image*
              </AppText>
              <AppTextInput
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
      <SelectCategory
        ref={categoryPopupRef}
        onPress={handleOptionSelect}
        onClose={() => navigation.goBack()}
      />
    </KeyboardAwareScrollView>
  );
};

export default CreateAds;
