import React, {useState} from 'react';
import {Button, TextInput, View, Text, ToastAndroid} from 'react-native';
import SoundPlayer from 'react-native-sound-player';


export default function Quayso() {
  //   const Stack = createStackNavigator();
  const [so, setSo] = useState(0);
  const [maymanso, setMaymanSo] = useState(0);
  const Quayso = props => {
    const {navigation} = props;
    const numbers = Math.floor(Math.random() * 1000000);
    setMaymanSo(numbers);
    if (maymanso == so) {
      ToastAndroid.show('trung so', ToastAndroid.LONG);
    } else {
      ToastAndroid.show('da ko trung so', ToastAndroid.LONG);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="nhập"
        value={so}
        onChangeText={text => setSo(text)}
      />
      <Button title="quay so" onPress={Quayso} />

      <Text>{maymanso}</Text>
    </View>
  );
}
