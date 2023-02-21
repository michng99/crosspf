import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';

const CustomButtonSocials = () => {
  return (
    <View style={styles.rowsoci}>
      <Pressable style={styles.container}>
        <Image
          style={styles.imsoci}
          source={require('../../../assets/images/facebook.png')}></Image>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Facebook</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <Image
          style={styles.imsoci}
          source={require('../../../assets/images/google.png')}></Image>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFDF1',
    flexDirection: 'row',
    width: 165,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  imsoci: {
    width: 21,
    height: 21,
    marginEnd: 5,
  },
  rowsoci: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default CustomButtonSocials;
