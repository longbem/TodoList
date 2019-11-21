import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CheckBox, ListItem, Body} from 'native-base';

// data
import data from '../../Database/Database';

const ItemCard = ({item}) => {
  //console.log('item: ', item.item.checked);

  const [checked, setChecked] = useState(item.item.checked);

  console.log('check: ', !checked);

  return (
    <TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#DDD',
          borderBottomWidth: 1,
          flexDirection: 'row',
          padding: 20,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <CheckBox
          style={{left: 0}}
          onPress={checked => setChecked(!checked)}
          checked={checked}
        />

        <Text style={{fontSize: 20, marginLeft: 30}}>{item.item.task}</Text>
      </View>
    </TouchableOpacity>
    //   <View style={{ paddingRight: 10 }}>
    //       <ListItem>
    //
    //           <Body>
    //               <Text style={{ fontSize: 20, marginLeft: 20 }}>{item.item.task}</Text>
    //           </Body>
    //       </ListItem>
    //   </View>
  );
};

export default ItemCard;
