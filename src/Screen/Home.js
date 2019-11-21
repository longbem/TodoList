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
  SafeAreaView,
  ImageBackground,
  FlatList,
  Alert,
  AsyncStorage,
  ScrollView,
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
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import ButtonAdd from '../Component/ButtonAdd';
import ItemCard from '../Component/ItemCard';
import ListTodo from '../Component/FlatList';
import data from '../../Database/Database';

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
  }, [props.navigation.state.params ? props.navigation.state.params : null]);

  return (
    <FlatList
      data={getData}
      renderItem={renderItemList}
      keyExtractor={item => item.task}
    />
  );
};

// toggleDone
toggleDone = item => {
  const [todos, setTodo] = useState();
  todos = data;
  todos = todos.map(todo => {
    if (todo.task) {
      todos.checked = !todo.checked;
    }
    return todo;
  });
  setTodo(todos);
};

// screen home
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
          <Title style={{fontWeight: 'bold', fontSize: 20}}>Todo App</Title>
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
      <ScrollView>
        <View>{renderList(props)}</View>
        {/* <ListTodo navigation={props} /> */}
      </ScrollView>
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
    backgroundColor: '#B3E9F2',
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
    backgroundColor: '#B6E9F2',
  },
  boxCenter: {
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default Home;
