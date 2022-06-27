import {StyleSheet, Text, View, Image} from 'react-native';
import {getHeaderTitle} from '@react-navigation/elements';
import MyBackButton from '../components/MyBackButton';
import MyHeader from '../components/MyHeader';
import HomeHeader from '../components/HomeHeader';
import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NumberIcon from '../components/NumberIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const getCartItem = useSelector(state => state.getCartItem);
  var productNumber = getCartItem.numberCart;
  return (
    <Tab.Navigator
      screenOptions={{
        
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          marginTop: 1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({navigation, route, options, back}) => {
            const title = getHeaderTitle(options, route.name);
            return title === 'Home' ? (
              <MyHeader
                homeScreen={<HomeHeader />}
                leftButton={
                  back ? (
                    <MyBackButton
                      onPress={() => {
                        navigation.goBack();
                      }}
                    />
                  ) : undefined
                }
              />
            ) : (
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
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icon/Home.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 15,
                  tintColor: focused ? '#40BFFF' : '#9098B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#40BFFF' : '#9098B1',
                  marginTop: 5,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <NumberIcon productnumber={productNumber} />
              <Image
                source={require('../assets/icon/Cart.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 15,
                  tintColor: focused ? '#40BFFF' : '#9098B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#40BFFF' : '#9098B1',
                  marginTop: 5,
                }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icon/User.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 15,
                  tintColor: focused ? '#40BFFF' : '#9098B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#40BFFF' : '#9098B1',
                  marginTop: 5,
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Splash"
        component={LoginStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icon/User.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 15,
                  tintColor: focused ? '#40BFFF' : '#9098B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#40BFFF' : '#9098B1',
                  marginTop: 5,
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
