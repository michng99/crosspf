//Class context la class xu ly chuc nang lay thong tin

import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import AxiosInstance from '../AxiosClient/AxiosInstance';

export const NewsContext = createContext();
//Context, Provider luon luon di chung voi nhau
export const NewsProvider = props => {
  const {children} = props;

  //lay danh sach bai viet
  const getNews = async () => {
    try {
      const result = await AxiosInstance().get('/articles');
      return result.data;
    } catch (error) {
      console.log('getNews error: ', error);
    }
    return [];
  };

  //lay chi tiet 1 bai viet theo id
  const getNewDetail = async id => {
    try {
      const result = await AxiosInstance().get(`articles/${id}/detail`);
      return result.data[0]; //API tra ve mang => lay index tu 0
    } catch (error) {
      console.log('getNewDetail error: ', error);
    }
    return null;
  };

  //upload hinh anh tu bo nho dien thoai len server
  const uploadImg = async form => {
    try {
      const res = await AxiosInstance('multipart/form-data').post(
        'media/upload',
        form,
      );
      console.log('loi ', res);
      return res.data;
    } catch (error) {
      console.log('upload img error:   ', error);
    }
    return null;
  };

  //them bai viet
  const updateProfile = async (name, address, phone, avatar, dob) => {
    try {
      const body = {name, address, phone, avatar, dob};
      console.log('body:   ', body);

      const res = await AxiosInstance().post('users/update-profile', body);
      return res.data;
    } catch (error) {
      console.log('addNews error:   ', error);
    }
    return false;
  };

  const addNews = async (title, content, image) => {
    try {
      const body = {title, content, image};
      console.log('body:   ', body);

      const res = await AxiosInstance().post('articles', body);
      return res.data;
    } catch (error) {
      console.log('addNews error:   ', error);
    }
    return false;
  };

  return (
    <NewsContext.Provider
      value={{getNews, getNewDetail, uploadImg, updateProfile, addNews}}>
      {children}
    </NewsContext.Provider>
  );
};
