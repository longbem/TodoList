/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import {Container, Content, Header, Body, Title, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import data from './Database/Database';

renderItemList = item => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        marginBottom: 20,
        width: 400,
      }}>
      <View style={{width: 50}}>
        <CheckBox />
      </View>
      <View>
        <Text style={{fontSize: 20, position: 'absolute'}}>
          {item.item.task}
        </Text>
      </View>
    </View>
  );
};

renderList = () => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <FlatList
      data={data}
      renderItem={renderItemList}
      keyExtractor={item => item.task}
    />
  );
};

renderAdd = () => {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View style={{paddingLeft: 10, paddingRight: 10, marginBottom: 30}}>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: 10,
          fontSize: 20,
        }}>
        Add Task
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Add task...."
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: '#CCC9C9',
            opacity: 0.8,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#366DFF',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              padding: 10,
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

renderSearch = () => {
  return (
    <View style={{paddingLeft: 10, paddingRight: 10}}>
      <Text
        style={{
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: 10,
          fontSize: 20,
        }}>
        Search
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Search task...."
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: '#CCC9C9',
            opacity: 0.8,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#366DFF',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              padding: 10,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <Container>
      <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/736x/91/06/21/9106217e59456dbc2593f74737f119c6.jpg',
        }}
        style={{width: '100%', height: '100%'}}>
        <Header transparent>
          <Body>
            <Title style={{fontWeight: 'bold', fontSize: 30}}>Todo App</Title>
          </Body>
        </Header>
        <View
          style={{
            padding: 20,
            position: '',
          }}>
          <View>{renderAdd()}</View>
          <View>{renderSearch()}</View>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#E4E5E7',
            opacity: 0.7,
          }}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text style={{padding: 10, fontSize: 20}}>List Todo</Text>
          </View>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <View
            style={{
              opacity: 0.5,
              backgroundColor: '#E4E5E7',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}></View>
          <View style={{position: 'absolute'}}>{renderList()}</View>
        </View>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
