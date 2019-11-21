import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, AsyncStorage} from 'react-native';
import {CheckBox, ListItem, Body} from 'native-base';

// data
import data from '../../Database/Database';

const ListTodo = props => {
  console.log('props: ', props);

  const [getData, setData] = useState();
  const [check, setCheck] = useState(false);
  const [loading, setLoad] = useState(true);

  // list item
  renderItemList = item => {
    console.log('item', item);
    let checked = item.item.checked;
    return (
      <View style={styles.boxListItem}>
        <ListItem>
          <CheckBox checked={checked} onPress={() => (checked = !checked)} />
          <Body>
            <Text style={{fontSize: 20, marginLeft: 20}}>{item.item.task}</Text>
          </Body>
        </ListItem>
      </View>
    );
  };

  // Get data
  useEffect(() => {
    //setLoad(true);
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
  }, [props]);

  return (
    <FlatList
      data={getData}
      renderItem={renderItemList}
      keyExtractor={item => item.task}
    />
  );
};

const styles = StyleSheet.create({
  boxListItem: {
    // paddingLeft: 20,
    marginTop: 10,
    marginRight: 10,
    // marginBottom: 20,
  },
});

export default ListTodo;
