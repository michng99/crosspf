import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {NewsContext} from '../../components/NewContextProvider/GetNewContext';

const Home = props => {
  const {navigation} = props;
  //truyen danh sach bai viet tu GetNewContext
  const {getNews} = useContext(NewsContext);
  const [name, setName] = useState(''); //khoi tao state name
  const [data, setData] = useState([]); //khoi tao ds bai viet

  //Get Data To Show On FlatList
  useEffect(() => {
    const getData = async () => {
      const result = await getNews();
      setData(result);
    };
    getData();
    return () => {};
  }, []);

  //renderItem = adapter
  const renderItem = props => {
    const {item} = props;
    const {title, image, createdAt, _id} = item;

    const timeCount = value => {
      const date = new Date(value);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      // console.log('date is ' + value);
      return `${year}/${month}/${day}`;
    };

    return (
      <Pressable
        style={styles.cardv}
        onPress={() => navigation.navigate('Detail', {id: _id})}>
        <Image source={{uri: image}} style={styles.imgv} />
        <View style={styles.contentv}>
          <Text style={styles.topicv}>Europe</Text>
          <Text style={styles.topicv}>{timeCount(createdAt)}</Text>
          <Text style={styles.titlev}>{title}</Text>
          {/* <Text>VNExpress</Text> */}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Appicon.png')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFDF1',
  },
  cardv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
  },
  imgv: {
    width: 108,
    height: 108,
    marginRight: 6,
    borderRadius: 6,
  },
  contentv: {
    flex: 1,
    height: 108,
    // backgroundColor: 'green',
  },
  topicv: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: '#4e4b66',
  },
  titlev: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 24,
    color: '#000',
    height: '100%',
  },
});

export default Home;
