import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonAdd = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Add')}
      style={{
        backgroundColor: '#D87DE8',
        width: 60,
        height: 60,
        borderRadius: 30,
      }}>
      <Icon
        name="plus"
        style={{
          alignSelf: 'center',
          paddingTop: 12,
        }}
        size={35}
        color="#fff"
      />
    </TouchableOpacity>
  );
};

export default ButtonAdd;
