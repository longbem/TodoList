import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

// data
import data from '../../Database/Database';

const ItemCard = ({item}) => {
  //console.log('item: ', item.item.checked);

  const [checked, setChecked] = useState(item.item.checked);
  const [todos, setTodo] = useState();

  // toggleDone
  toggleDone = item => {
    todos = data;
    todos = todos.map(todo => {
      if (todo.task) {
        todos.checked = !todo.checked;
      }
      return todo;
    });
    setTodo(todos);
  };

  return (
    <TouchableOpacity onPress={toggleDone}>
      <View
        style={{
          flex: 1,
          borderBottomColor: '#DDD',
          borderBottomWidth: 1,
          flexDirection: 'row',
          marginRight: 10,
        }}>
        <CheckBox
          onPress={() => setChecked(checked => !checked)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked}
        />

        <Text style={{fontSize: 20, marginTop: 14}}>{item.item.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
