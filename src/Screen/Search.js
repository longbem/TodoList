import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {Container, Header, Left, Body, Right} from 'native-base';
import ItemCard from '../Component/ItemCard';

import Icon from 'react-native-vector-icons/AntDesign';

// // list item
renderItemList = item => <ItemCard item={item} />;

// list
renderList = props => {
  console.log('props: ', props);

  const [getData, setData] = useState();
  const [check, setCheck] = useState(false);
  const [loading, setLoad] = useState(true);
  // Get data
  useEffect(() => {
    setLoad(true);
    (async function _retrieveData() {
      try {
        const value = await AsyncStorage.getItem('keyData');
        console.log('value', value);
        const getValues = JSON.parse(value);
        setData(getValues);
        console.log('data: ', getData);
      } catch (error) {
        console.log('error');
      }
    })();
  }, []);

  return (
    <FlatList
      data={getData}
      renderItem={renderItemList}
      keyExtractor={item => item.task}
    />
  );
};

const Search = props => {
  const [getData, setData] = useState();
  const [check, setCheck] = useState(false);
  const [loading, setLoad] = useState(true);
  // Get data
  useEffect(() => {
    setLoad(true);
    (async function _retrieveData() {
      try {
        const value = await AsyncStorage.getItem('keyData');
        console.log('value', value);
        const getValues = JSON.parse(value);
        setData(getValues);
        console.log('data: ', getData);
      } catch (error) {
        console.log('error');
      }
    })();
  }, []);

  onSearch = txt => {
    console.log('getData: ', getData);
    let filteredData = getData.filter(data => data.task.includes(txt));
    setData(filteredData);
  };

  return (
    <Container>
      <Header
        transparent
        style={{borderBottomColor: '#E9E6E9', borderBottomWidth: 1}}>
        <Left style={styles.btn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="left" size={30} />
          </TouchableOpacity>
        </Left>
        <Body>
          <View style={StyleSheet.boxInput}>
            <TextInput
              style={styles.TextInput}
              placeholder={'Tìm kiếm'}
              onChangeText={search => onSearch(search)}
            />
          </View>
        </Body>
        <Right></Right>
      </Header>
      <View>
        <FlatList
          data={getData}
          renderItem={renderItemList}
          keyExtractor={item => item.task}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginRight: 50,
  },
  boxInput: {},
  TextInput: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 10,
    width: 330,
    backgroundColor: '#EDEBED',
    borderRadius: 30,
    marginBottom: 7,
  },
});

export default Search;
