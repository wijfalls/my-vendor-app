import {createStackNavigator} from '@react-navigation/stack';
import {Icons} from 'assets/images';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import CompleteProfile from 'screens/auth/CompleteProfile';
import ForgotPassword from 'screens/auth/ForgotPassword';
import Login from 'screens/auth/Login';
import Onboarding from 'screens/auth/Onboarding';
import PasswordRecovery from 'screens/auth/PasswordRecovery';
import Signup from 'screens/auth/Signup';
import SocialLogin from 'screens/auth/SocialLogin';
import Verification from 'screens/auth/Verification';
import Welcome from 'screens/auth/Welcome';
import {vw} from 'utils/Constants.util';
import NavigatioOptionsUtil from 'utils/NavigatioOptions.util';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={NavigatioOptionsUtil}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />

      {/* <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="SocialLogin"
        component={SocialLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfile}
        options={{headerTitle: 'Complete Profile', headerTitleAlign: 'center'}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  backIcon: {
    width: 25,
    height: 25,
    marginLeft: vw * 8,
  },
});
