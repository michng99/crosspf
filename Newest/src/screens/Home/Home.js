import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  //renderItem = adapter
  const renderItem = props => {
    const {item} = props;
    return (
      <View style={styles.cardv}>
        <Image
          style={styles.imgv}
          source={require('../../../assets/images/Hotpot.png')}
        />
        <View style={styles.contentv}>
          <Text style={styles.topicv}>Europe</Text>
          <Text style={styles.titlev}>
            Ông Zelensky tuyên bố Nga tổn thất nặng ở miền đông Ukraine
          </Text>
          {/* <Text>VNExpress</Text> */}
        </View>
      </View>
    );
  };

  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
    {id: '6', title: 'Item 6'},
    {id: '7', title: 'Item 7'},
    {id: '8', title: 'Item 8'},
    {id: '9', title: 'Item 9'},
    {id: '10', title: 'Item 10'},
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Appicon.png')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false}
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
