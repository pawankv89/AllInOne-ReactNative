import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Image,TouchableOpacity,Share,StatusBar,AppRegistry,FlatList,Alert,Platform} from 'react-native';
import {styles, gridStyles,baseStyles} from './SharedStyles';
import atoz_big from '../resources/alphabets_atoz_big.json';
import atoz_small from '../resources/alphabets_atoz_small.json';
import NetInfo from "@react-native-community/netinfo";

import StartAppAd from '../startapp/StartAppAd';
import Banner from '../startapp/StartAppBanner';

// Share Play Store Link
const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'http://play.google.com/store/apps/details?id=com.pk.allinone',
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

class AlphabetsScreen extends Component {

  constructor(props)
  {
    super(props);

    const { navigation } = this.props; 
    const user_tableType = navigation.getParam('tableType'); 

    // Get Value from first screen
    if (user_tableType == 'alphabets_atoz_small'){
         this.state = { 
           GridViewItems: atoz_small,
           connected: true
        }
    } else {
         this.state = { 
          GridViewItems: atoz_big,
          connected: true
       }
    }
  }

    // For Navigation Header
    static navigationOptions = {
      title: 'Alphabets',
      //Sets Header text of Status Bar
      headerStyle: {
        backgroundColor: '#0a57f2',
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
        <View style={gridStyles.box}>
          <Text style={gridStyles.text} > {item.name} </Text>
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
}

export default AlphabetsScreen;
