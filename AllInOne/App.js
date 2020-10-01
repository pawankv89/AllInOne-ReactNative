import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import RootStack from './navigation/RootStack';
//Import react-navigation
import { createAppContainer } from 'react-navigation';
export default createAppContainer(RootStack);


/* // Options I
export default class App extends React.Component {
    render() {
      return (<Text>Hello Dashboard</Text>)
    }
}*/

/*
// Options II
// For Root Navigation Screen
import HomeScreen from './component/HomeScreen';

class App extends Component {
  render() {
      return (
        <HomeScreen></HomeScreen>
      );
  }
}

export default App;
*/

/*
// Options III
//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './component/HomeScreen';
import AlphabetsScreen from './component/AlphabetsScreen';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  Home: { screen: HomeScreen }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Alphabets: { screen: AlphabetsScreen }, 
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);

*/

