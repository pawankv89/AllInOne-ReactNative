import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

// For All Screen
import TemplateScreen from '../component/TemplateScreen';
import HomeScreen from '../component/HomeScreen';
import AlphabetsScreen from '../component/AlphabetsScreen';
import ListScreen from '../component/ListScreen';
import NumberTableScreen from '../component/NumberTableScreen';

//import all the screens we are going to switch 
const RootStack = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Alphabets: { screen: AlphabetsScreen },
      List: { screen: ListScreen },
      NumberTable: { screen: NumberTableScreen },
      Template: { screen: TemplateScreen },
    },
    {
        initialRouteName: 'Home',
    }
    
    );
    
    export default RootStack;