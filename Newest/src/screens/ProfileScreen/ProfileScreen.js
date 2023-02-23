import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

const ProfileScreen = props => {
  const {nagivation} = props;

  const [name, setName] = useState('');
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image style={Styles.icHeader} />

        <Text style={Styles.txtHeader}>Profile</Text>
        <Image
          style={Styles.icHeader}
          source={require('../../../assets/images/icSetting.png')}
        />
      </View>

      <View style={Styles.infProfile}>
        <Image
          style={Styles.imgPro}
          source={require('../../../assets/images/Hotpot.png')}
        />
        <View style={Styles.casePro}>
          <View style={Styles.follow}>
            <Text style={Styles.countFollow}>100k</Text>
            <Text style={Styles.txtFollow}>Followers</Text>
          </View>
          <View style={Styles.follow}>
            <Text style={Styles.countFollow}>1</Text>
            <Text style={Styles.txtFollow}>Following</Text>
          </View>
          <View style={Styles.follow}>
            <Text style={Styles.countFollow}>20k</Text>
            <Text style={Styles.txtFollow}>News</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  txtFollow: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#4E4B66',
  },

  countFollow: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    lineHeight: 24,
  },

  follow: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },

  casePro: {
    marginLeft: 16,
    marginVertical: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  imgPro: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  infProfile: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    marginTop: 13,
  },

  icHeader: {
    color: '4E4B66',
    height: 22,
    width: 19,
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

  container: {
    backgroundColor: '#bcbcec',
    flex: 1,
    padding: 24,
  },
});

export default ProfileScreen;
