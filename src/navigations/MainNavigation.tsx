import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Backgrounds, DrawerIcons, Icons, TabIcons} from 'assets/images';
import AppText from 'components/AppText';
import {AppButton} from 'components/Buttons';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import About from 'screens/app/About';

import Chat from 'screens/app/Chat';
import ChatList from 'screens/app/ChatList';
import ContactUs from 'screens/app/ContactUs';
import EditProfile from 'screens/app/EditProfile';

import Home from 'screens/app/Home';
import Notifications from 'screens/app/Notifications';
import PrivacyPolicy from 'screens/app/PrivacyPolicy';
import Profile from 'screens/app/Profile';

import TermsAndCondition from 'screens/app/TermsAndConditions';
import ServiceDetails from 'screens/app/ServiceDetails';
import {vh, vw} from 'utils/Constants.util';

import NavigatioOptionsUtil from 'utils/NavigatioOptions.util';
import {Theme} from 'utils/Theme.util';
import Services from 'screens/app/Services';
import AddEditServices from 'screens/app/AddEditServices';
import SubscriptionPlan from 'screens/app/SubscriptionPlan';
import SubscriptionLog from 'screens/app/SubscriptionLog';
import RateAndReview from 'screens/app/RateAndReview';
import SearchService from 'screens/app/SearchService';
import ServiceByCategory from 'screens/app/ServiceByCategory';
import ClassifiedAds from 'screens/app/ClassifiedAds';
import AdDetails from 'screens/app/AdDetails';
import MyAdsScreen from 'screens/app/MyAds';
import CreateAds from 'screens/app/CreateAds';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={NavigatioOptionsUtil}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={NavigatioOptionsUtil}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={NavigatioOptionsUtil}
      />

      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetails}
        options={NavigatioOptionsUtil}
      />
      <Stack.Screen
        name="SearchService"
        component={SearchService}
        options={NavigatioOptionsUtil}
      />
      <Stack.Screen
        name="AdDetails"
        component={AdDetails}
        options={NavigatioOptionsUtil}
      />
      <Stack.Screen
        name="ServiceByCategory"
        component={ServiceByCategory}
        options={NavigatioOptionsUtil}
      />
      <Stack.Screen
        name="AddEditServices"
        component={AddEditServices}
        options={NavigatioOptionsUtil}
      />
      <Stack.Screen
        name="SubscriptionPlan"
        component={SubscriptionPlan}
        options={NavigatioOptionsUtil}
      />
      {/* CreateAds */}
      <Stack.Screen
        name="CreateAds"
        component={CreateAds}
        options={NavigatioOptionsUtil}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const DrawerNavigator = ({route, component}) => (
  <Drawer.Navigator
    drawerContent={e => <CustomDrawer {...e} />}
    screenOptions={e => ({
      ...NavigatioOptionsUtil(e),
      drawerType: 'front',
      drawerStyle: {
        width: '75%',
        zIndex: 999,
      },
    })}>
    <Drawer.Screen
      name={'TabNavigation'}
      component={TabNavigation}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="MyAdsScreen"
      component={MyAdsScreen}
      options={NavigatioOptionsUtil}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={NavigatioOptionsUtil}
    />

    <Drawer.Screen
      name="SubscriptionLog"
      component={SubscriptionLog}
      options={NavigatioOptionsUtil}
    />
    <Drawer.Screen
      name="ContactUs"
      component={ContactUs}
      options={NavigatioOptionsUtil}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={NavigatioOptionsUtil}
    />
    <Drawer.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={NavigatioOptionsUtil}
    />
    <Drawer.Screen
      name="TermsAndCondition"
      component={TermsAndCondition}
      options={NavigatioOptionsUtil}
    />
  </Drawer.Navigator>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={e => <CustomTabBar {...e} />}
      screenOptions={NavigatioOptionsUtil}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: renderHome,
          tabBarLabel: 'Home',
        }}>
        {/* {props => <DrawerNavigator {...props} component={Home} />} */}
      </Tab.Screen>
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: renderServices,
          tabBarLabel: 'Services',
        }}>
        {/* {props => <DrawerNavigator {...props} component={Discover} />} */}
      </Tab.Screen>
      {/* <Tab.Screen
        name="ClassifiedAds"
        component={ClassifiedAds}
        options={{
          tabBarIcon: renderClassified,
          tabBarLabel: 'Classified Ads',
        }}>

      </Tab.Screen> */}
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarIcon: renderChat,
          tabBarLabel: 'Chats',
        }}>
        {/* {props => <DrawerNavigator {...props} component={Chat} />} */}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const renderHome = ({focused}) => (
  <Image style={[styles.tabIcon]} source={TabIcons.Home} />
);

const renderServices = ({focused}) => (
  <Image style={[styles.tabIcon]} source={TabIcons.Services} />
);

const renderChat = ({focused}) => (
  <Image style={[styles.tabIcon]} source={TabIcons.Chat} />
);

const renderClassified = ({focused}) => (
  <Image style={[styles.tabIcon]} source={TabIcons.Classified} />
);

const CustomTabBar = ({state, descriptors, navigation}) => {
  const tabOptions = [state.routes[0], state.routes[1], state.routes[2]];
  return (
    <View style={[styles.tabBar]}>
      {tabOptions.map((route, index) => {
        if (!route) {
          return <View style={{flex: 1}} />;
        }
        const {options} = descriptors[route.key];
        let isFocused = state.index === index;
        if (index > 2) {
          isFocused = state.index === index - 1;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = options.tabBarIcon
          ? options.tabBarIcon({focused: isFocused})
          : null;
        if (isFocused) {
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabButton, isFocused && styles.tabButtonFocused]}>
              <View style={styles.tabIconContainer}>{icon}</View>
              <AppText
                style={{
                  color: '#fff',
                  fontSize: vh * 1.2,
                  marginTop: Platform.OS == 'ios' ? vh * 0.8 : vh * 1,
                }}>
                {options.tabBarLabel}
              </AppText>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabButton]}>
            {icon}
            {/* <AppText
              style={{
                color: '#fff',
                fontSize: vh * 1.2,
              }}>
              {options.tabBarLabel}
            </AppText> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: vh * 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Theme.primary,
    paddingBottom: Platform.OS == 'ios' ? vh * 1.5 : 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // white: {color: '#fff'},
  elevatedButton: {
    position: 'absolute',
    top: -vh * 3,
    width: vh * 5.68,
    height: vh * 5.68,
    borderRadius: vw * 7.5,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    left: vw * 50 - vh * 2.84,
  },
  createIcon: {
    height: vh * 3.7,
    width: vh * 3.7,
    resizeMode: 'contain',
  },
  tabIcon: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
    marginBottom: vh * 0.4,
  },
  logoutButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: vh * 2,
    backgroundColor: '#FF3D00',
  },
  tabButtonFocused: {
    marginTop: -vh * 5,
  },
  tabIconContainer: {
    backgroundColor: Theme.primary,
    borderRadius: vh * 6,
    height: vh * 6.5,
    width: vh * 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Theme.white,
    borderColor: Theme.white,
    borderWidth: 2,
  },
  white: {
    color: '#fff',
  },
});

const drawerRoutes = [
  {
    title: 'Home',
    route: 'TabNavigation',
    icon: 'Home',
    params: {
      screen: 'Home',
    },
  },

  {
    title: 'Profile Settings',
    route: 'Profile',
    icon: 'Profile',
  },
  {
    title: 'Subscription Logs',
    route: 'SubscriptionLog',
    icon: 'Logs',
  },
  // Contact US
  {
    title: 'Contact Us',
    route: 'ContactUs',
    icon: 'ContactUs',
  },
  // TermsAndConditions, AboutUs, PrivacyPolicy
  {
    title: 'Terms & Conditions',
    route: 'TermsAndCondition',
    icon: 'Terms',
  },
  {
    title: 'About Us',
    route: 'About',
    icon: 'About',
  },
  {
    title: 'Privacy Policy',
    route: 'PrivacyPolicy',
    icon: 'Privacy',
  },
];

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      // contentContainerStyle={drawerStyles.container}
    >
      <ImageBackground
        source={Backgrounds.PostCardBG}
        imageStyle={{
          width: vw * 75,
          height: vh * 20,
          marginLeft: -vw * 3,
          marginTop: -vh * 8,
          borderRadius: vh * 2,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={drawerStyles.header}>
          <Image
            source={Backgrounds.ProfilePlaceholder}
            style={drawerStyles.profileImage}
          />
          <View>
            <AppText style={styles.white}>Vendor</AppText>
            <AppText weight="bold" style={drawerStyles.greetingText}>
              Casey Hunter
            </AppText>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <View style={drawerStyles.routesContainer}>
        {drawerRoutes.map((route, index) => (
          <TouchableOpacity
            key={index}
            style={[drawerStyles.routeButton]}
            onPress={() =>
              props.navigation.navigate(route.route, route.params)
            }>
            <View style={[drawerStyles.iconContainer]}>
              <Image
                source={DrawerIcons[route.icon]}
                style={[drawerStyles.routeIcon]}
              />
              <Text style={drawerStyles.routeText}>{route.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        key={'logout'}
        style={[drawerStyles.routeButton, drawerStyles.logout]}
        onPress={() =>
          props.navigation.navigate('AuthNavigation', {screen: 'SocialLogin'})
        }>
        <View style={[drawerStyles.iconContainer]}>
          <Image source={DrawerIcons.Logout} style={[drawerStyles.routeIcon]} />
          <Text style={drawerStyles.routeText}>Logout</Text>
        </View>
      </TouchableOpacity>
      {/* <AppButton
        onPress={() =>
          props.navigation.navigate('AuthNavigation', {screen: 'SocialLogin'})
        }
        containerStyle={styles.logoutButton}>
        {'Logout'}
      </AppButton> */}
    </DrawerContentScrollView>
  );
};

const drawerStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: vw * 5,
    backgroundColor: Theme.white,
    // width: vw * 70,
    // alignItems: 'flex-start',
    // paddingLeft: vw * 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: vh * 2,

    paddingBottom: vh * 2,
    marginTop: vh * 2,
    // paddingLeft: vw * 5,
  },
  profileImage: {
    width: vh * 8,
    height: vh * 8,
    borderRadius: vh * 5.86,
    marginRight: vw * 3,
  },
  greetingText: {
    fontSize: vh * 2.5,
    color: Theme.white,
  },
  routesContainer: {
    marginTop: vh * 2,
    // flex: 1,
    // justifyContent: 'space-between',
  },
  routeButton: {
    marginVertical: vh * 1,
  },
  iconContainer: {
    marginBottom: vh * 1,
    height: vh * 3,
    borderRadius: vh * 6.1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  routeIcon: {
    width: vh * 2,
    height: vh * 2,
    tintColor: Theme.primary,
    resizeMode: 'contain',
  },
  routeText: {
    fontSize: vh * 2,
    color: Theme.black,
    marginLeft: vw * 2,
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: vh * 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    width: vw * 10,
    height: vw * 10,
    marginRight: vw * 2,
  },
  logoutText: {
    fontSize: vh * 2.5,
    color: Theme.primary,
  },
  activeRoute: {
    backgroundColor: Theme.secondary,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Theme.lightGray,
    marginBottom: vh * 3,
    marginTop: vh * 1.5,
  },
  logout: {
    marginTop: vh * 2,
    borderTopWidth: 1,
    borderTopColor: Theme.border,
    paddingTop: vh * 2,
    width: vw * 68,
  },
});
