import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screen
import Home from '../Screen/Home';
import AddTask from '../Screen/AddTask';
import Search from '../Screen/Search';

const NavStack = createStackNavigator(
  {
    Home: Home,
    Add: AddTask,
    Search: Search,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const App = createAppContainer(NavStack);

export default App;
