import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

var height = Dimensions.get('window').height;
const Detail = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.section}>
      <View style={styles.authInfo}>
        <Image source={require('../../../assets/images/Ellipse.png')} />
        <View style={styles.auth}>
          <Text style={styles.authName}>BBC News</Text>
          <Text style={styles.authTime}>5h ago</Text>
        </View>
      </View>
      <Image
        source={require('../../../assets/images/news.jpg')}
        style={styles.newsimg}
        resizeMode="cover"
      />
      <Text style={styles.eu}>Europe</Text>
      <Text style={styles.title}>
        U.S. president Biden visits war-time Kyiv
      </Text>
      <Text style={styles.content}>
        U.S. President Joe Biden made an unannounced visit to the Ukrainian
        capital Kyiv on Monday, days before the first anniversary of Russia's
        attacks in Ukraine in 2022. An air raid sirens blared across the
        Ukrainian capital as Biden visited Kyiv but there were no reports of
        Russian missile or air strikes. Biden said Washington would stand with
        Ukraine as long as it takes. "Your visit is an extremely important sign
        of support for all Ukrainians," Zelenskiy said.
      </Text>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: '#bcbcbc',
    padding: 24,
  },
  authInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  auth: {
    marginLeft: 5,
  },
  authName: {
    fontWeight: '600',
    fontSize: height * 0.018,
    lineHeight: 18,
    color: '#000',
  },
  authTime: {
    ontWeight: '400',
    fontSize: height * 0.015,
    lineHeight: 18,
    color: '#000',
  },
  newsimg: {
    width: '100%',
    height: 248,
    marginTop: 16,
    borderRadius: 6,
  },
  eu: {
    fontWeight: '400',
    fontSize: height * 0.018,
    lineHeight: 18,
    color: '#000',
    marginTop: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: height * 0.03,
    lineHeight: 35,
    color: 'black',
    marginTop: 4,
  },
  content: {
    fontWeight: '400',
    fontSize: height * 0.02,
    lineHeight: 24,
    color: 'black',
    marginTop: 16,
  },
});
