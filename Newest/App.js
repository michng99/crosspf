import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image, View} from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
// import Home from './src/screens/Home/Home';
// import Detail from './src/screens/Details/Detail';
// import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
// import ProfileEditor from './src/screens/ProfileEditor/ProfileEditor';
import AppNavigation from './src/components/AppNavigation/AppNavigation';
import {UserProvider} from './src/components/UserContextValidation/UserContextValidation';
import {NewsProvider} from './src/components/NewContextProvider/GetNewContext';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    // <SafeAreaView style={styles.section}>
    //   <Detail />
    // </SafeAreaView>
    // <NavigationContainer>
    //   {/* <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
    //     <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    //   </Stack.Navigator> */}
    //   <Tab.Navigator>
    //     {/* tabBarOptions={{
    //       showLabel: false,
    //       style: {
    //         position: 'absolute',
    //         bottom: 25,
    //         left: 20,
    //         right: 20,
    //         elevation: 0,
    //         backgroundColor: '#ffffff',
    //         borderRadius: 15,
    //         height: 90,
    //       },
    //     }}> */}
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Detail" component={Detail} />
    //     <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    //     <Tab.Screen name="ProfileEditor" component={ProfileEditor} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    //Provider la kho chua cac component con
    <UserProvider>
      <NewsProvider>
        <AppNavigation></AppNavigation>
      </NewsProvider>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
});

export default App;
