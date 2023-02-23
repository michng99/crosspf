import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {NewsContext} from '../../components/NewContextProvider/GetNewContext';

var height = Dimensions.get('window').height;

const Detail = props => {
  const {nagivation, route} = props;

  const [name, setName] = useState('');

  //truyen chi tiet bai viet theo id tu GetNewContext
  const {id} = route?.params;
  const {getNewDetail} = useContext(NewsContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await getNewDetail(id);
      setData(result);
    };
    if (id) getData();
    return () => {};
  }, [id]);

  return data ? (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.section}>
      <View style={styles.authInfo}>
        <Image source={require('../../../assets/images/Ellipse.png')} />
        <View style={styles.auth}>
          <Text style={styles.authName}>BBC News</Text>
          <Text style={styles.authTime}>5h ago</Text>
        </View>
      </View>
      <Image
        source={{uri: data?.image}}
        style={styles.newsimg}
        resizeMode="cover"
      />
      <Text style={styles.eu}>Europe</Text>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.content}>{data?.content}</Text>
    </ScrollView>
  ) : (
    <View>
      <Text style={{fontSize: 40}}>Data is loading</Text>
    </View>
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
