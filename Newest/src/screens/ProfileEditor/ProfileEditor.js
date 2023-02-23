import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useContext, createContext, useCallback} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NewsContext} from '../../components/NewContextProvider/GetNewContext';

const Stack = createStackNavigator();

const ProfileEditor = props => {
  const {navigation} = props;

  const {uploadImg, updateProfile} = useContext(NewsContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [dob, setDob] = useState('');

  /////////////////////////////
  const imageResult = async result => {
    console.log('result');
    if (result.didCancel) return;
    if (result.error) return;
    result = result.assets[0];
    const form = new FormData();
    form.append('image', {
      uri: result.uri,
      type: result.type,
      name: result.fileName,
    });
    const data = await uploadImg(form);
    console.log('data', data);
    // console.log("data.path", data.path);
    if (data) {
      setAvatar(data.path);
    }
  };

  /////////////////////////////
  const handlePhoto = useCallback(async () => {
    // console.log('1');
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };
    // launchCamera(options, imageResult);
    launchImageLibrary(options, imageResult);
  }, []);

  /////////////////////////////
  const handleAdd2 = useCallback(async () => {
    const result = await updateProfile(name, address, phone, avatar, dob);
    if (result) {
      Alert.alert('addNews', 'addedNews successfully');
      // navigation.goBack();
      setName('');
      setAddress('');
      setPhone('');
      setAvatar('');
      setDob('');
    } else {
      Alert.alert('addNews', 'addedNews failed');
    }
  }, [name, address, phone, avatar, dob]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
      <View style={Styles.header}>
        <Image
          style={Styles.icHeader}
          source={require('../../../assets/images/icDelete.png')}
        />
        <Text style={Styles.txtHeader}>Edit Profile</Text>
        <Pressable onPress={handleAdd2}>
          <Image
            style={Styles.icHeader}
            source={require('../../../assets/images/icTick.png')}
          />
        </Pressable>
      </View>

      <View style={Styles.avatar}>
        <View>
          {/* <Image
            source={require('../../../assets/images/Hotpot.png')}
            style={Styles.imgAvt}
          /> */}
          {avatar ? (
            <Image source={{uri: avatar}} style={Styles.imgAvt} />
          ) : (
            <Image style={Styles.imgAvt} />
          )}
          <View style={Styles.icCamera}>
            <Pressable onPress={handlePhoto}>
              <Image
                style={Styles.vtCamera}
                source={require('../../../assets/images/camera.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={Styles.txtProf}>
        <Text style={Styles.txtTitle}>Name</Text>
        <TextInput
          onChangeText={setName}
          value={name}
          style={Styles.txtContext}
        />
      </View>
      <View style={Styles.txtProf}>
        <Text style={Styles.txtTitle}>Address</Text>
        <TextInput
          onChangeText={setAddress}
          value={address}
          style={Styles.txtContext}
        />
      </View>
      <View style={Styles.txtProf}>
        <Text style={Styles.txtTitle}>
          Phone<Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          onChangeText={setPhone}
          value={phone}
          style={Styles.txtContext}
        />
      </View>
      <View style={Styles.txtProf}>
        <Text style={Styles.txtTitle}>
          Date of Birth <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          onChangeText={setDob}
          value={dob}
          style={Styles.txtContext}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileEditor;

const Styles = StyleSheet.create({
  icHeader: {
    color: '4E4B66',
    height: 12.73,
    width: 12.73,
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  txtProf: {
    marginTop: 16,
  },
  txtTitle: {
    height: 21,
    fontSize: 14,
    color: '#4E4B66',
    fontWeight: '400',
  },
  txtContext: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4E4B66',
    borderRadius: 6,
    marginTop: 4,
    padding: 10,
    height: 48,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  vtCamera: {
    marginVertical: '23.333%',
    width: 16,
    height: 16,
  },

  icCamera: {
    top: 110,
    right: 17,
    left: 93,
    backgroundColor: '#1877f2',
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 70,
    alignItems: 'center',
  },
  imgAvt: {
    borderRadius: 70,
    width: 140,
    height: 140,
  },

  avatar: {
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    backgroundColor: '#fff',
    // flex: 1,
    padding: 24,
  },
});
