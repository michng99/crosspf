import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = create;
const CameraPicker = () => {
  return (
    <View>
      <Text>CameraPicker</Text>
    </View>
  );
};

export default CameraPicker;

const styles = StyleSheet.create({});
