import { DrawerActions } from '@react-navigation/native';
import Fonts from 'assets/fonts';
import { Backgrounds, Icons } from 'assets/images';
import Text from 'components/AppText';
import { BackButton } from 'components/Buttons';
import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { FontSize, vh, vw } from './Constants.util';
import { Theme } from './Theme.util';
import AppText from 'components/AppText';
import fonts from 'assets/fonts';

export default props => ({
    // headerTransparent: getHeaderTransparency(props),
    headerLeft: () => getHeaderLeft(props),
    headerRight: () => getHeaderRight(props),
    headerTitle: () => getHeaderTitle(props),
    headerTitleStyle: styles.title,
    headerTitleAlign: getTitleAlignment(props),
    headerStyle: getHeaderStyle(props),
    headerShadowVisible: false,
    style: { backgroundColor: Theme.white },
    headerShown: true,
});

function getTitleAlignment(props) {
    const styleArray = [];
    if (logoHeader[props.route.name]) {
        return 'left'
    }
    return 'left';
}

function getHeaderStyle(props) {
    const styleArray = [];
    if (blueBg[props.route.name]) {
        styleArray.push(styles.blueBg);
    }
    return styleArray;
}



function getHeaderTitle(props) {
    if (logoHeader[props.route.name]) {
        return (<TouchableOpacity
            // onPress={() => { props.navigation.navigate('Profile') }}
            style={[styles.profileBtn, { marginRight: vw * 4 }]}
            activeOpacity={0.8}>
            <Image
                source={Backgrounds.ProfilePlaceholder}
                style={styles.profileImage}
            />
            <View style={styles.nameOnline}>
                <AppText style={{ color: Theme.grayText }}>Vendor</AppText>
                <AppText weight='semiBold' style={styles.name}>Casey Hunter</AppText>
            </View>
        </TouchableOpacity>)
    }
    if (props.route?.params?.title) {
        return <Text style={[styles.title]}>{props.route.params.title}</Text>;
    }
    if (titles[props.route.name]) {
        return <Text style={[styles.title]}>{titles[props.route.name]}</Text>;
    }
    if (darkTitles[props.route.name]) {
        return <Text style={[styles.title]}>{darkTitles[props.route.name]}</Text>;
    }
    if (props.route?.params?.title) {
        return <Text style={[styles.title]}>{props.route.params.title}</Text>;
    }
    if (props.route.name === 'Chat') {
        return (
            <TouchableOpacity
                // onPress={() => { props.navigation.navigate('Profile') }}
                style={[styles.profileBtn, { marginRight: vw * 4 }]}
                activeOpacity={0.8}>
                <Image
                    source={{
                        uri: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
                    }}
                    style={styles.profileImage}
                />
                <View style={styles.nameOnline}>
                    <AppText weight='medium' style={styles.name}>Alka</AppText>
                    <AppText style={{ color: Theme.white }}>Online</AppText>
                </View>
            </TouchableOpacity>)
    }
    return '';
}

function getHeaderLeft(props) {

    if (backButtons[props.route.name]) {
        return <BackButton {...props} />;
    }
    if (drawerButton[props.route.name]) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.menuBtn}
                onPress={() =>
                    props.navigation.dispatch(DrawerActions.openDrawer())
                }>
                <Image source={Icons.Menu} style={styles.menu} />
            </TouchableOpacity>
        );
    }
    return null;
}

function getHeaderRight(props) {


    if (
        logoHeader[props.route.name]
    ) {
        return (
            <View style={styles.row}>
                {(props.route.name === 'Services') && <TouchableOpacity
                    onPress={() => props.navigation.navigate('AddEditServices')}
                    style={[styles.profileBtn,]}
                    activeOpacity={0.8}>
                    <Image
                        source={Icons.AddService}
                        style={styles.editIcon}
                    />
                </TouchableOpacity>}
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Notifications')}
                    style={[styles.profileBtn,]}
                    activeOpacity={0.8}>
                    <Image
                        source={Icons.Notification}
                        style={styles.editIcon}
                    />
                </TouchableOpacity>

            </View>
        );
    }

    return null;
}
const drawerButton = {
    Home: true,
    Discover: true,
    Connections: true,
    MyParties: true,
    Networks: true,
    Forums: true,
    Resources: true,
    Wellness: true,
    Profile: true,
    Wishlist: true,
    Guest: true,
    ToDoList: true,
    ChatList: true,
    Services: true,
    ClassifiedAds: true,
    About: true,
    PrivacyPolicy: true,
    TermsAndCondition: true,
    ContactUs: true,
    MyAdsScreen: true,
};
const backButtons = {
    // CreateParty: true,
    Chat: true,

    EditProfile: true,
    Notifications: true,
    SubscriptionLog: true,
    SubscriptionPlan: true,
    Login: true,
    ForgotPassword: true,
    PasswordRecovery: true,
    Verification: true,
    SearchService: true,
    ServiceDetails: true,
    Signup: true,
    CompleteProfile: true,
    AddEditServices: true,
    RateAndReview: true,
    ServiceByCategory: true,
    AdDetails: true,
    CreateAds: true,
};
const blueBg = {
    Profile: true,
    // Login: true,
    // ForgotPassword: true,
    // PasswordRecovery: true,
    // Verification: true,
    SearchService: true,
    // Signup: true,
    EditProfile: true,
    About: true,
    TermsAndCondition: true,
    PrivacyPolicy: true,
    ContactUs: true,
    Chat: true,
    Notifications: true,
    CompleteProfile: true,
    AddEditServices: true,
    SubscriptionLog: true,
    SubscriptionPlan: true,
    RateAndReview: true,
    ServiceDetails: true,

};
const titles = {
    Discover: 'Discover Party!',
    Connections: 'Connections/Friends!',
    MyParties: 'My Parties',
    CreateParty: 'Create Party',
    Networks: 'Support Network!',
    Forums: 'Forums & Interactions !',
    Wellness: 'Wellness',
    Resources: 'Educational Resources !',
    Profile: 'Profile',
    SearchService: 'Search Services',
    CreateScreenshot: 'Screen Shot',
    ViewGuestByEvents: 'View Guest by events - sorting',
    AddGuest: 'Add Guest',
    Screenshots: 'Screen Shots',
    About: 'About Us',
    TermsAndCondition: 'Term & Condition',
    PrivacyPolicy: 'Privacy Policy',
    ContactUs: 'Contact Us',
    AddEditToDo: 'Create Task',
    Notes: 'Notes',
    AddEditNote: 'Notes',
    Events: 'Events',
    // Login: 'Login To Your Account',
    // Signup: 'Create New Account',
    // ForgotPassword: 'Password Recovery',
    // PasswordRecovery: 'Password Recovery',
    // Verification: 'Password Recovery',
    CompleteProfile: 'Profile completion',
    AddEditServices: 'Create Service',
    RateAndReview: 'Review & Ratings',
    ServiceDetails: 'Service Details',
    AdDetails: 'Ad Details',

};
const logoHeader = {
    Home: true,
    Wishlist: true,
    Guest: true,
    ToDoList: true,
    ChatList: true,
    Services: true,
    ClassifiedAds: true,
    MyAdsScreen: true,
};
const darkTitles = {

    About: 'About Us',
    PrivacyPolicy: 'Privacy Policy',
    TermsAndCondition: 'Terms & Conditions',
    ContactUs: 'Contact Us',
    EditProfile: 'Edit Profile',
    Notifications: 'Notifications',

    SubscriptionLog: 'Subscription Logs',
    SubscriptionPlan: 'Subscription Plans',

};
const styles = StyleSheet.create({
    title: {
        fontSize: FontSize * 1.6,
        alignSelf: 'center',
        fontFamily: fonts.Raleway.SemiBold,
        color: Theme.black,
        marginLeft: vw * 1,
    },
    blueBg: {
        backgroundColor: 'transparent',
    },
    homeText: {
        marginLeft: vw * 2,
        color: Theme.white,
        fontSize: FontSize * 1.4,
    },
    userImageContainer: {
        marginRight: vw * 5,
    },
    userImage: {
        height: vh * 5,
        width: vh * 5,
        borderRadius: vh * 5,
    },
    headerPaddingTop: {
        ...(Platform.OS === 'ios' ? { marginTop: vh * 5 } : {}),
    },
    editIcon: {
        height: vh * 6,
        width: vh * 6,
        resizeMode: 'contain',
    },
    rightMenu: {
        height: vh * 3,
        width: vh * 4,
        resizeMode: 'contain',
    },
    profileBtn: {
        marginRight: vw * 3.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuBtn: {
        // backgroundColor: Theme.white,
        marginLeft: vw * 3.5,
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    menu: {
        height: vh * 4,
        width: vh * 4,
        resizeMode: 'contain',
    },
    storyText: {
        color: Theme.secondary,
        fontSize: FontSize * 1.1,
    },
    Logo: {
        height: vh * 10,
        width: vw * 40,
        resizeMode: 'contain',
    },
    profileImage: {
        height: vh * 6,
        width: vh * 6,
        borderRadius: vh * 5,
    },
    nameOnline: {
        marginLeft: vw * 2,
        color: Theme.black,

    },
    name: {
        fontSize: FontSize * 1.8,
        color: Theme.black,
        marginTop: -5
    }
});
