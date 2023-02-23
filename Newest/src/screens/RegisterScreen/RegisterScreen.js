import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React, {useState, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButtonSocials from '../../components/CustomButtonSocials/CustomButtonSocials';
import {UserContext} from '../../components/UserContextValidation/UserContextValidation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

var height = Dimensions.get('window').height;

const RegisterScreen = props => {
  const {navigation} = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {register} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const result = await register(email, password);
    if (result) {
      ToastAndroid.show('Register successful', ToastAndroid.LONG);
      navigation.navigate('LoginScreen');
    } else {
      ToastAndroid.show('Register failed', ToastAndroid.LONG);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <LinearGradient
      colors={['#FFFDF1', '#F2FDF4', '#005AA7']}
      style={styles.linear}>
      <Text style={styles.text}>Hello</Text>
      <Text style={[styles.text, {color: '#108dc7'}]}>World</Text>
      <Text style={styles.wctext}>Welcome back you’ve {'\n'}been missed</Text>
      <Text style={styles.usnametxt}>
        Username <Text style={{color: '#b20a2c'}}>*</Text>
      </Text>
      <TextInput
        style={styles.textinput}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={Colors.lighterGrey}
        placeholder="Enter your email"
      />
      <Text style={styles.passwordtxt}>
        Password <Text style={{color: '#b20a2c'}}>*</Text>
      </Text>
      <View style={styles.viewpw}>
        <Image
          source={require('../../../assets/images/Icon.png')}
          style={{
            position: 'absolute',
            right: 15,
            top: 14,
            color: '#000046',
          }}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.textinput}
          placeholderTextColor={Colors.lighterGrey}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <Pressable onPress={handleRegister} style={styles.btlogin}>
        <Text style={styles.textlogin}>Sign Up</Text>
      </Pressable>
      <Text style={{marginTop: 16, textAlign: 'center', color: '#000146'}}>
        You already have an account?{' '}
        <Text
          onPress={() => navigation.navigate('LoginScreen')}
          style={{color: '#EEE', fontWeight: '600'}}>
          Sign In
        </Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linear: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: height * 0.05,
    color: '#000046',
  },
  wctext: {
    fontfontFamily: 'Poppins',
    fontSize: 20,
    marginTop: 4,
    marginBottom: 40,
    color: '#4E4B66',
  },
  usnametxt: {
    fontfontFamily: 'Poppins',
    fontSize: 14,
    color: '#000046',
    marginBottom: 4,
  },
  passwordtxt: {
    fontfontFamily: 'Poppins',
    fontSize: 14,
    color: '#000046',
    marginBottom: 4,
  },
  textinput: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#000046',
    padding: 10,
    marginBottom: 16,
  },
  viewrb: {
    flexDirection: 'row',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textrow: {
    color: '#000046',
  },
  btlogin: {
    height: 48,
    backgroundColor: '#000046',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  textlogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textcont: {
    textAlign: 'center',
    color: '#000146',
    marginTop: 16,
    fontSize: 14,
    fontStyle: 'normal',
    marginBottom: 16,
  },
  imgsoci: {
    width: 21,
    height: 21,
    marginEnd: 10,
  },
  viewpw: {
    width: '100%',
  },
});

export default RegisterScreen;
