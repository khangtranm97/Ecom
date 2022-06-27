import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getHeaderTitle} from '@react-navigation/elements';

// Home Screen
import HomeScreen from '../screens/Home/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import HomeHeader from '../components/HomeHeader';
import MyBackButton from '../components/MyBackButton';
import MyHeader from '../components/MyHeader';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import NotificationOffer from '../screens/Notification/NotificationOffer';
import NotificationFeed from '../screens/Notification/NotificationFeed';
import NotificationActivity from '../screens/Notification/NotificationActivity';
import FavoriteProductScreen from '../screens/FavoriteProduct/FavoriteProductScreen';
import FlashSale from '../screens/FlashSale/FlashSale';
import MegaSaleScreen from '../screens/MegaSale/MegaSaleScreen';
import ProductDetails from '../screens/FavoriteProduct/ProductDetails';
import MoreReview from '../screens/FavoriteProduct/MoreReview';
import WriteReview from '../screens/FavoriteProduct/WriteReview';

import SearchDropdown from '../components/SearchDropdown';
import SearchResult from '../components/SearchResult';
import SortOptions from '../components/SortOptions';
import Category from '../screens/Category/Category';
import AllProduct from '../screens/Category/AllProduct';

//Cart Screen
import AddAddress from '../screens/Account/Address/AddAddress';
import EditAddress from '../screens/Account/Address/EditAddress';
import CreditCard from '../screens/Account/Payment/CreditCard';
import ProductDetail from '../components/ProductDetail';
import SelectAddress from '../components/SelectAddress';
import SelectPaymentMethod from '../components/SelectPaymentMethod';
import PendingPayment from '../components/PendingPayment';
import OderSuccess from '../components/OderSuccess';

//Account Screen
import ProfileScreen from '../screens/Account/Profile/ProfileScreen';
import OrderScreen from '../screens/Account/Order/OrderScreen';
import AddressScreen from '../screens/Account/Address/AddressScreen';
import PaymentScreen from '../screens/Account/Payment/PaymentScreen';
import ChangeNameScreen from '../screens/Account/Profile/ChangeNameScreen';
import ChangeGenderScreen from '../screens/Account/Profile/ChangeGenderScreen';
import ChangeBirthdayScreen from '../screens/Account/Profile/ChangeBirthdayScreen';
import ChangeEmailScreen from '../screens/Account/Profile/ChangeEmailScreen';
import ChangePhoneNumberScreen from '../screens/Account/Profile/ChangePhoneNumberScreen';
import ChangePasswordScreen from '../screens/Account/Profile/ChangePasswordScreen';
import OrderDetailScreen from '../screens/Account/Order/OrderDetailScreen';

//Login Screen
import SplashScreen from '../components/SplashScreen';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);

          return title === 'Bottom Tab' ? undefined : (
            <MyHeader
              title={title}
              leftButton={
                back ? (
                  <MyBackButton
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ) : undefined
              }
              style={options.headerStyle}
            />
          );
        },
      }}>
      <Stack.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Bottom Tab" component={BottomTabNavigator} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Offer" component={NotificationOffer} />
      <Stack.Screen name="Feed" component={NotificationFeed} />
      <Stack.Screen name="Activity" component={NotificationActivity} />
      <Stack.Screen name="Favorite Product" component={FavoriteProductScreen} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="More Review" component={MoreReview} />
      <Stack.Screen name="Write Review" component={WriteReview} />
      <Stack.Screen name="Flash Sale" component={FlashSale} />
      <Stack.Screen name="Mega Sale" component={MegaSaleScreen} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Sort By" component={SortOptions} />
      <Stack.Screen
        name="All Product"
        component={AllProduct}
        options={({route}) => ({title: route.params.data.details})}
      />
      <Stack.Screen
        name="Search"
        component={SearchDropdown}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search Result"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Ship To" component={SelectAddress} />
      <Stack.Screen name="Payment Method" component={SelectPaymentMethod} />
      <Stack.Screen name="Choose Card" component={PendingPayment} />
      <Stack.Screen name="Oder Success" component={OderSuccess} />

      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Change Name" component={ChangeNameScreen} />
      <Stack.Screen name="Change Gender" component={ChangeGenderScreen} />
      <Stack.Screen name="Change Birthday" component={ChangeBirthdayScreen} />
      <Stack.Screen name="Change Email" component={ChangeEmailScreen} />
      <Stack.Screen
        name="Change PhoneNumber"
        component={ChangePhoneNumberScreen}
      />
      <Stack.Screen name="Change Password" component={ChangePasswordScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Order Detail" component={OrderDetailScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Add Address" component={AddAddress} />
      <Stack.Screen name="Edit Address" component={EditAddress} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Credit Card" component={CreditCard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
