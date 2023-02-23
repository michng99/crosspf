import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserNavigation from '../UserNavigation/UserNavigation';
import GetNewsNavigation from '../GetNewsNavigation/GetNewsNavigation';
import {UserContext} from '../UserContextValidation/UserContextValidation';

const AppNavigation = () => {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <GetNewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
