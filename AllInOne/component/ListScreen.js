import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Button,Image,TouchableOpacity,Share,StatusBar,AppRegistry,FlatList,Alert,Platform} from 'react-native';
import {styles,baseStyles} from './SharedStyles';
import animal_farm from '../resources/animal_farm.json';
import animal_insects from '../resources/animal_insects.json';
import animal_pets from '../resources/animal_pets.json';
import animal_sea from '../resources/animal_sea.json';
import animal_wild from '../resources/animal_wild.json';
import birds from '../resources/birds.json';
import fruits from '../resources/fruits.json';
import humanbodyparts from '../resources/humanbodyparts.json';
import month from '../resources/month.json';
import states from '../resources/states.json';
import vegetables from '../resources/vegetables.json';
import weekdays from '../resources/weekdays.json';
import number_table_default from '../resources/number_table_default.json'
import colours from '../resources/colours.json'
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

class ListScreen extends Component {

  constructor(props)
  {
    super(props);

    const { navigation } = this.props; 
    const user_tableType = navigation.getParam('tableType'); 

    // Get Value from first screen
    if (user_tableType == 'animal_farm'){
      this.state = { 
        data: animal_farm,
        connected: true
      };
    } else if (user_tableType == 'animal_insects'){
      this.state = { 
        data: animal_insects,
        connected: true
      };
    } else if (user_tableType == 'animal_pets'){
      this.state = { 
        data: animal_pets,
        connected: true
      };
    } else if (user_tableType == 'animal_sea'){
      this.state = { 
        data: animal_sea,
        connected: true
      };
    } else if (user_tableType == 'animal_wild'){
      this.state = { 
        data: animal_wild,
        connected: true
      };
    } else if (user_tableType == 'birds'){
      this.state = { 
        data: birds,
        connected: true
      };
    } else if (user_tableType == 'fruits'){
      this.state = { 
        data: fruits,
        connected: true
      };
    } else if (user_tableType == 'humanbodyparts'){
      this.state = { 
        data: humanbodyparts,
        connected: true
      };
    } else if (user_tableType == 'month'){
      this.state = { 
        data: month,
        connected: true
      };
    } else if (user_tableType == 'states'){
      this.state = { 
        data: states,
        connected: true
      };
    } else if (user_tableType == 'vegetables'){
      this.state = { 
        data: vegetables,
        connected: true
      };
    } else if (user_tableType == 'weekdays'){
      this.state = { 
        data: weekdays,
        connected: true
      };
    } else if (user_tableType == 'colours'){
      this.state = { 
        data: colours,
        connected: true
      };
    } else if (user_tableType == 'number_table_default'){
      this.state = { 
        data: number_table_default,
        connected: true
      };
    } else if (user_tableType == 'number_table_one_to_ten'){
      this.state = { 
        data: null,
        connected: true
      };
    } else if (user_tableType == 'number_table_eleven_to_twenty'){
      this.state = { 
        data: null,
        connected: true
      };
    }
  }

  
    // For Navigation Header
    static navigationOptions = {
      title: 'List',
      //Sets Header text of Status Bar
      headerStyle: {
        backgroundColor: '#00BCD4',
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
    const { navigation } = this.props; 
    const user_tableType = navigation.getParam('tableType'); 
    //colours

      return (   
        <View style={baseStyles.container}>
          <View style={baseStyles.containerItem}>
          <FlatList
         data={ this.state.data }
         renderItem={({item}) =>
         <View style={styles.containerList}>
           {user_tableType == 'colours' ? 
             <Image style={[styles.image, {backgroundColor: item.name}]}/> : (
             <Text style={styles.text}> {item.name} </Text>
          )}
              <Text style={styles.text}> {item.english} </Text>
              <Text style={styles.text}> {item.hindi} </Text>
        </View>
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={1}
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

export default ListScreen;
