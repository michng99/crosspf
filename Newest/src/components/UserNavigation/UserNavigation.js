//class dieu huong nguoi dung den trang dang nhap, dang ky
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{title: 'Đăng Nhập'}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{title: 'Đăng ký'}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
