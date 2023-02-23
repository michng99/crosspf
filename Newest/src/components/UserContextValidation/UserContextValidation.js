import React, {createContext, useState} from 'react';
import AxiosInstance from '../AxiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();
// always include of Context, Provider
export const UserProvider = props => {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = async (email, password) => {
    try {
      //can truyen dung tham so tu API json-server
      const body = {
        email: email,
        password: password,
      };
      console.log(body);
      const response = await AxiosInstance().post('/users/register', body);
      console.log('register response', response);
      return true;
    } catch (error) {
      console.log('error: ' + error);
    }
    return false;
  };

  const login = async (email, password) => {
    try {
      const body = {
        email: email,
        password: password,
      };
      console.log(body);
      const response = await AxiosInstance().post('/auth/login', body);
      //doc token
      const {token} = response.data;
      //luu token vao bo nho
      await AsyncStorage.setItem('token', token);
      //cap nhat state, chuyen trang thai login
      setIsLoggedIn(true);
      console.log('login response', response);
      return true;
    } catch (error) {
      console.log('login error: ' + error);
    }
    return false;
  };
  return (
    <UserContext.Provider value={{isLoggedIn, login, register}}>
      {children}
    </UserContext.Provider>
  );
};
