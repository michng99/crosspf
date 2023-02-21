import {Text, StyleSheet, View, Button} from 'react-native';
import React, {useState, useContext, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Screen1 = props => {
  //require add navigation functions
  const {navigation} = props;
  //useState []
  const [age, setAge] = useState(20);
  //useContext {}
  const {count, setCount} = useContext(AppContext);
  return (
    <View>
      <Text>Screen 1: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
      <Button
        title="To Screen 2"
        onPress={() => navigation.navigate('Screen2', {abc: age})}
      />
    </View>
  );
};

const Screen2 = props => {
  const {navigation, route} = props;
  const {abc} = route?.params;
  return (
    <View>
      <Text>Screen 2 :{abc}</Text>
      <Button
        title="To Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//khoi tao context cho App
// tao context de provider de chua du lieu
const AppContext = createContext();
const AppProvider = props => {
  const {children} = props;
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{count, setCount}}>
      {children}
    </AppContext.Provider>
  );
};

const NavigationDemo = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Screen2"
          screenOptions={{headerShown: true}}>
          <Tab.Screen name="Screen1" component={Screen1} />
          {/* ten.... component */}
          <Tab.Screen
            name="Screen2"
            component={Screen2}
            initialParams={{abc: 18}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default NavigationDemo;

const styles = StyleSheet.create({});

/**
 * {}: object
 * []: array
 * (): function
 */
