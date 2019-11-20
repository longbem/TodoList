import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
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

AddTask = props => {
  const [task, setTask] = useState('');

  const onAddTask = async () => {
    console.log('data: ', data);
    let object = {task: task};
    data.push(object);

    try {
      const ahbn = await AsyncStorage.setItem('keyData', JSON.stringify(data));
      console.log('data: ', ahbn);
    } catch (err) {
      console.log('err');
    }

    setTask('');
    props.navigation.goBack();
  };

  return (
    <Container>
      <Header
        transparent
        style={{borderBottomColor: '#E9E6E9', borderBottomWidth: 1}}>
        <Left>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="left" size={30} />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={{fontWeight: 'bold', fontSize: 30}}>New task</Title>
        </Body>
        <Right></Right>
      </Header>
      <View style={{paddingLeft: 10, paddingRight: 10, marginBottom: 30}}>
        <Text style={{color: '#97989C', fontSize: 20, marginTop: 10}}>
          Nhập task mới ở dưới đây!
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            multiline={true}
            placeholder="New task....?"
            style={styles.txtInput}
            value={task}
            onChangeText={task => setTask(task)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onAddTask}>
        <Text
          style={{
            padding: 11,
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
          }}>
          Add
        </Text>
      </TouchableOpacity>
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
    height: 70,
    fontSize: 20,
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E4E5E7',
  },
  btn: {
    backgroundColor: '#366DFF',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
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
  boxList: {
    opacity: 0.5,
    backgroundColor: '#E4E5E7',
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

export default AddTask;
