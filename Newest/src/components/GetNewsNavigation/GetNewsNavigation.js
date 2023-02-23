import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Text, Image} from 'react-native';
import ProfileEditor from '../../screens/ProfileEditor/ProfileEditor';
import Detail from '../../screens/Details/Detail';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import Home from '../../screens/Home/Home';
import AddNews from '../../screens/AddNews/AddNews';
import Quayso from '../../screens/XoSo/XoSo';

const Tab = createBottomTabNavigator();
const GetNewsNavigation = props => {
  const {navigation} = props;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name == 'Home') {
            if (focused) {
              return (
                <Image
                  source={require('../../../assets/images/home.jpg')}
                  style={{width: 18, height: 18}}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../assets/images/homedis.jpg')}
                  style={{width: 18, height: 18}}
                />
              );
            }
          } else if (route.name == 'Detail') {
            if (focused) {
              return (
                <Image
                  source={require('../../../assets/images/explore.jpg')}
                  style={{width: 18, height: 18}}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../assets/images/exploreDis.jpg')}
                  style={{width: 18, height: 18}}
                />
              );
            }
          } else if (route.name == 'ProfileScreen') {
            if (focused) {
              return (
                <Image
                  source={require('../../../assets/images/profile.png')}
                  style={{width: 18, height: 18}}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../assets/images/profiledis.png')}
                  style={{width: 18, height: 18}}
                />
              );
            }
          } else if (route.name == 'ProfileEditor') {
            if (focused) {
              return (
                <Image
                  source={require('../../../assets/images/profileEditor.png')}
                  style={{width: 18, height: 18}}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../../assets/images/profileEditordis.png')}
                  style={{width: 18, height: 18}}
                />
              );
            }
          }
        },

        tabBarLabel: ({focused}) => {
          if (route.name == 'Home') {
            if (focused) {
              return <Text style={{color: '#1877F2'}}>Home</Text>;
            } else {
              return <Text style={{color: '#4E4B66'}}>Home</Text>;
            }
          } else if (route.name == 'Detail') {
            if (focused) {
              return <Text style={{color: '#1877F2'}}>Explore</Text>;
            } else {
              return <Text style={{color: '#4E4B66'}}>Explore</Text>;
            }
          } else if (route.name == 'ProfileScreen') {
            if (focused) {
              return <Text style={{color: '#1877F2'}}>Bookmark</Text>;
            } else {
              return <Text style={{color: '#4E4B66'}}>Bookmark</Text>;
            }
          } else if (route.name == 'ProfileEditor') {
            if (focused) {
              return <Text style={{color: '#1877F2'}}>Profile</Text>;
            } else {
              return <Text style={{color: '#4E4B66'}}>Profile</Text>;
            }
          }
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} />
      {/* <Tab.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      <Tab.Screen name="Quayso" component={Quayso} />
      <Tab.Screen name="ProfileEditor" component={ProfileEditor} />
      <Tab.Screen name="AddNew" component={AddNews} />
    </Tab.Navigator>
  );
};
export default GetNewsNavigation;

// class cai dat chuyen huong man hinh
