/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Alert,
  AsyncStorage,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Title,
  CheckBox,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import ButtonAdd from '../Component/ButtonAdd';

// data
import data from '../../Database/Database';

// list item
renderItemList = item => {
  console.log('item: ', item);
  return (
    <View style={styles.boxListItem}>
      <View style={{width: 50}}>
        <CheckBox checked={false} />
      </View>
      <View>
        <Text style={{fontSize: 20, position: 'absolute'}}>
          {item.item.task}
        </Text>
      </View>
    </View>
  );
};

// list
renderList = () => {
  const [getData, setData] = useState();

  useEffect(() => {
    // Using an IIFE
    (async function _retrieveData() {
      try {
        const value = await AsyncStorage.getItem('keyData');
        console.log('value', value);
        const getValues = JSON.parse(value);
        setData(getValues);
        console.log('data: ', getData);
      } catch (error) {
        // Error retrieving data
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

const Home = props => {
  return (
    <Container>
      <Header
        transparent
        style={{borderBottomColor: '#E9E6E9', borderBottomWidth: 1}}>
        <Left>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('ok');
            }}>
            <Icon name="menuunfold" size={30} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={{fontWeight: 'bold', fontSize: 30}}>Todo App</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
            <Icon name="search1" size={30} />
          </TouchableOpacity>
        </Right>
      </Header>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 66, height: 66, borderRadius: 20}}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: '#BEBFC2',
            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Add')}>
            <Text style={{color: '#BEBFC2', marginBottom: 5, fontSize: 20}}>
              Hello, Long
            </Text>
            <Text style={{color: '#97989C'}}>
              Bạn có muốn thêm task mới...?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxTitle}>
        <View style={styles.boxCenter}>
          <Text style={{padding: 10, fontSize: 20}}>List Todo</Text>
        </View>
      </View>
      <View>{renderList()}</View>
      <View
        style={{
          position: 'absolute',
          right: 20,
          bottom: 30,
        }}>
        <ButtonAdd />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  //
  txtTitle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontSize: 20,
  },
  txtInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#CCC9C9',
    opacity: 0.8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btn: {
    backgroundColor: '#366DFF',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  boxTitle: {
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#E4E5E7',
  },
  boxCenter: {
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  boxListItem: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    width: 400,
  },
});

export default Home;
