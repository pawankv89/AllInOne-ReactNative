import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Image,TouchableOpacity,Share,StatusBar,AppRegistry,FlatList,Alert,Platform,ToastAndroid} from 'react-native';
import {styles,baseStyles} from './SharedStyles';
import json from '../resources/home.json';
import ToastExample from '../ToastExample';
import OfflineNotice from '../networkmanager/OfflineNotice'
import renderIf from '../renderIf';
import NetInfo from "@react-native-community/netinfo";

import StartAppAd from '../startapp/StartAppAd';
import Banner from '../startapp/StartAppBanner';
import { Playstore, Appstore } from './Constant';

// Share Play Store Link
const onShare = async () => {
  try {
    const result = await Share.share({
      message: (Platform.OS === 'ios')? Appstore : Playstore,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

class HomeScreen extends Component {

  constructor(props)
  {
    super(props);
 
    this.state = { 
      GridViewItems: json,
      connected: true
    };
  }
 
  // For Navigation Header
  static navigationOptions = {
    title: 'Home',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#0a57f2',//'#00BCD4',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
    headerRight: () => (
      <TouchableOpacity onPress={onShare}><Image style={styles.image} source={require('../assets/share_button.png')}></Image></TouchableOpacity> 
    )
  };

  componentDidMount() {
    
    //To get the network state once
    NetInfo.fetch().then(state => {
       //console.log('First, is ' + (state ? 'online' : 'offline'));
       console.log('Fetch Connection type: ' + state.type + ', Is connected?: ' + state.isConnected);
       var connected = state.isConnected;
       this.setState({ connected });
     });
     
   //Subscribe to network state updates
   const unsubscribe = NetInfo.addEventListener(state => {
       console.log(
          'Fetch Subscribe Connection type: ' + 
           state.type + 
          ', Is connected?: ' + 
           state.isConnected);
           var connected = state.isConnected;
           this.setState({ connected });
     }); 
  }

  render() {
    return (   
      <View style={baseStyles.container}>
        <View style={baseStyles.containerItem}>
            <FlatList 
            data={ this.state.GridViewItems }
            renderItem={({item}) =>
            <View style={styles.GridViewBlockStyle}>
              <Text style={styles.TextStyle} onPress={this.GetGridViewItem.bind(this, item)} >
                {item.english}
              </Text>
            </View>}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            />
        </View>
        {
         this.state.connected === false ? 
           null : (
            Platform.OS === 'android' ? 
              <Banner style={baseStyles.banner}></Banner> : 
              null
           )
        }
      </View>
    );
  }

  GetGridViewItem (item) {

    if (Platform.OS === 'android') {
      StartAppAd.showAd();  
    }
    
    // Display Alert
    this.notifyMessage(item.english);

    // Goto Alphabets Screen
    const { navigate } = this.props.navigation;
     //navigate('Alphabets')
    if (item.tablename == 'alphabets_atoz_small' || item.tablename == 'alphabets_atoz_big'){
      navigate('Alphabets',{tableType:item.tablename})
    } else if (item.tablename == 'number_table_one_to_ten' || item.tablename == 'number_table_eleven_to_twenty'){
      navigate('NumberTable',{tableType:item.tablename})
    } else {
      navigate('List',{tableType:item.tablename})
    }
  }

  // Display Toast Message when click on list item
  notifyMessage(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
      //Alert.alert(message);
    }
  }
}

export default HomeScreen;

