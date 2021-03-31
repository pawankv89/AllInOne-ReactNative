import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Image,TouchableOpacity,Share,TextInput,StatusBar,AppRegistry,FlatList,Alert,Platform} from 'react-native';
import {styles,numberStyles,baseStyles} from './SharedStyles';
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

class NumberTableScreen extends Component {

  constructor(props)
  {
    super(props);

    const { navigation } = this.props; 
    const user_tableType = navigation.getParam('tableType'); 

    // Get Value from first screen
    if (user_tableType == 'number_table_one_to_ten'){
         this.getNumberTableOneToTenList();
    } else {
         this.getNumberTableElevenToTwentyList();
    }  
  }

    // For Navigation Header
    static navigationOptions = {
      title: 'Number Table',
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

    getNumberTableOneToTenList(){

      var row_list = []
      var list = []

      var row_1 = 0
      // For Row 1
      while (row_1 < 10){

          row_1++
          // Add row_1
          list.push(row_1.toString())
          row_list.push(row_1)
      }
      // For Row 2
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 2
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 3
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 3
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 4
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 4
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 5
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 5
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 6
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 6
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 7
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 7
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 8
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 8
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 9
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 9
          // Add row_2
          list.push(result.toString())
          row_1++
      }
      // For Row 10
      row_1 = 0
      while (row_1 < 10){

          var row = row_list[row_1]
          var result = row * 10
          // Add row_2
          list.push(result.toString())
          row_1++
      }

      //console.log(list);
      this.state = { 
        GridViewItems: list,
        connected: true
      };
  }

  getNumberTableElevenToTwentyList(){

    var row_list = []
    var list = []

    var row_1 = 0
    // For Row 1
    while (row_1 < 10){

        row_1++
        var result = row_1 + 10
        // Add row_1
        list.push(result.toString())
        row_list.push(result)
    }

    // For Row 2
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 2
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 3
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 3
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 4
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 4
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 5
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 5
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 6
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 6
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 7
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 7
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 8
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 8
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 9
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 9
        // Add row_2
        list.push(result.toString())
        row_1++
    }
    // For Row 10
    row_1 = 0
    while (row_1 < 10){

        var row = row_list[row_1]
        var result = row * 10
        // Add row_2
        list.push(result.toString())
        row_1++
    }

    //console.log(list);
    this.state = { 
      GridViewItems: list,
      connected: true
    };
  }

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
              renderItem={ ({item}) =>
              <View style={ numberStyles.box }>
                <Text style={ numberStyles.text } > { item } </Text>
              </View>}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              numColumns={10}
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

export default NumberTableScreen;
