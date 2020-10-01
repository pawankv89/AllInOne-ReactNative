import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Image,TouchableOpacity,Share,TextInput,StatusBar,AppRegistry,FlatList,Alert,Platform,requireNativeComponent} from 'react-native';
import {styles} from './SharedStyles';

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

var form = []
var textInputComponents = null

class TemplateScreen extends Component {

  constructor(props)
  {
    super(props);

    const { navigation } = this.props; 
    const user_tableType = navigation.getParam('tableType'); 
    this.getNumberTableDataList();
  }

    // For Navigation Header
    static navigationOptions = {
      title: 'Template Screen',
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

     /*
    headerRight: () => (
        <Button onPress = {() => Alert.alert('Display Alert')} title=" Share ">
          <Image style={styles.image} source={require('../assets/more_button.png')}></Image>
        </Button>
      )
    */

    getNumberTableDataList(){
      form = ['First Name', 'Last Name', 'Phone', 'Email', 'Etc']
      form.push('Pawan');
      textInputComponents = form.map(type => <TextInput placeholder={type} />)
    }

    render(){
        return (<View>{textInputComponents}</View>);
    }

    /*
    render() {

      //const { navigation } = this.props; 
      //const user_tableType = navigation.getParam('tableType'); 
      //<Text style={styles.text}> {JSON.stringify(user_tableType)} </Text>
  
      return (    
      <View style={styles.MainContainer}>
          <FlatList
           data={ this.state.data }
           renderItem={({item}) =>
           <View style={styles.containerList}>
                <Text style={styles.text}> {item.name} </Text>
                <Text style={styles.text}> {item.english} </Text>
                <Text style={styles.text}> {item.hindi} </Text>
          </View>
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={1}
       />
        </View>
        );
    }*/
}

export default TemplateScreen;


  // render() {
  //   return (   
  //     <View style={baseStyles.container}>
  //           <Text style={baseStyles.containerItem}> pks </Text>
  //           <Text style={baseStyles.containerItem}> pawan </Text>
  //           <Text style={baseStyles.containerItem}> kumar </Text>
  //       </View>
  //   );
  // }

  // render() {
  //   return (   
  //     <View>  
  //     <Banner styles={styles.banner}></Banner>
  //     </View>
  //   );
  // }
  /*
render() {
  return (   
    <View style={styles.Container}> 
    <View style={styles.MainContainer}>
    <View style={styles.header} >  
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
     renderIf(Platform.OS === 'android',
     <Banner style={styles.footer}></Banner>)
     }
    </View>
    <OfflineNotice />
    </View>
  );
}*/


    // Display Alert
    //Alert.alert(item.english);

    // if (Platform.OS === 'android') {
    //   ToastExample.show('Awesome', 300);
    // }

     /*

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
         this.state.connected === true ? 
           null : 
           null
        }
        {
         Platform.OS === 'android' ? 
           <Banner style={baseStyles.banner}></Banner> : 
           null
        }
      </View>
    );
  }
  */

/*
 const onBack = async () => {
  try {
  //this.goBack();
  //this.props.goBack();
  //const { navigate } = this.props.navigation;
  //navigate('Home')
  //this.props.navigation.push('Home')
  //this.props.navigation.goBack();
  //this.props.navigation.dispatch(NavigationActions.back())
  } catch (error) {
    alert(error.message);
  }
}


      headerLeft: () => (
        <TouchableOpacity onPress={onBack}><Image style={styles.image} source={require('../assets/back_button.png')}></Image></TouchableOpacity> 
      ),

*/

/* AlphabetsScreen
render() {
      return (
        <View style={gridStyles.container}>
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
      );
  }
*/