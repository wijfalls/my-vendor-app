import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from './AuthNavigation';
import {Theme} from 'utils/Theme.util';
import MainNavigation from './MainNavigation';
import {StatusBar} from 'react-native';
import NavigatioOptionsUtil from 'utils/NavigatioOptions.util';
import CompleteProfile from 'screens/auth/CompleteProfile';
import BootSplash from 'react-native-bootsplash';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Theme.white,
  },
};
const Stack = createStackNavigator();
const Navigations = () => {
  return (
    <>
      <NavigationContainer theme={MyTheme} onReady={BootSplash.hide}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Theme.transparent}
          translucent={true}
        />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          <Stack.Screen name="MainNavigation" component={MainNavigation} />
          <Stack.Screen
            name="CompleteProfile"
            component={CompleteProfile}
            options={NavigatioOptionsUtil}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigations;
