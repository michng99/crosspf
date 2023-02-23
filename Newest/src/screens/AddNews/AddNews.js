import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useCallback, useContext} from 'react';
import myStyle from '../../css/Add_css';
import {NewsContext} from '../../components/NewContextProvider/GetNewContext';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddNews = props => {
  const {navigation} = props;
  const {addNews, uploadImg} = useContext(NewsContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const imageResult = async result => {
    console.log('result', result);

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
      setImage(data.path);
    }
  };

  const handlePhoto = useCallback(async () => {
    // console.log('1');

    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };
    launchCamera(options, imageResult);
    // launchImageLibrary(options, imageResult);
  }, []);

  const handleAdd = useCallback(async () => {
    const result = await addNews(title, content, image);
    if (result) {
      Alert.alert('addNews', 'addedNews successfully');
      // navigation.goBack();
      setContent('');
      setTitle('');
      setImage(null);
    } else {
      Alert.alert('addNews', 'addedNews failed');
    }
  }, []);

  const handleAdd2 = useCallback(async () => {
    const result = await addNews(title, content, image);
    if (result) {
      Alert.alert('addNews', 'addedNews successfully');
      // navigation.goBack();
      setContent('');
      setTitle('');
      setImage(null);
    } else {
      Alert.alert('addNews', 'addedNews failed');
    }
  }, [title, content, image]);

  return (
    <View style={myStyle.container}>
      {image ? (
        <Image source={{uri: image}} style={myStyle.cover} />
      ) : (
        <Pressable onPress={handlePhoto} style={myStyle.cover}>
          <Image
            style={myStyle.imagePlus}
            source={require('../../../assets/images/plus.jpg')}
          />
          <Text style={myStyle.textPlus}>Add Cover Photo</Text>
        </Pressable>
      )}

      <TextInput
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
        style={myStyle.Inptitle}
      />
      <TextInput
        value={content}
        placeholder="Content"
        onChangeText={setContent}
        multiline={true}
        numberOfLines={4}
        style={myStyle.InpMutiline}
      />

      <TouchableOpacity>
        <Pressable onPress={handleAdd2} style={myStyle.press}>
          <Text style={myStyle.button}>Submit</Text>
        </Pressable>
      </TouchableOpacity>

      <Pressable onPress={handlePhoto}>
        <Image source={require('../../../assets/images/plus.jpg')} />
      </Pressable>
    </View>
  );
};

export default AddNews;
