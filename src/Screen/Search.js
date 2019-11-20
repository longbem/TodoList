import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Container, Header, Left, Body, Right} from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';

const Search = props => {
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
            <TextInput style={styles.TextInput} placeholder={'Tìm kiếm'} />
          </View>
        </Body>
        <Right></Right>
      </Header>
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
