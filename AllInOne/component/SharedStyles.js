import React, {StyleSheet, View, Dimensions, Component} from 'react-native';

import { 
  COLOR_PRIMARY,
  BORDER_RADIUS,
  FONT_SIZE,
  COMMON_PADDING,
  TEXT_COLOR,
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_CLEAR,
  ALIGNMENT_LEFT,
  ALIGNMENT_RIGHT,
  ALIGNMENT_CENTER,
  FONT_SIZE_GRID
} from './Constant';
 
//var { height } = Dimensions.get('window');
const { width , height } = Dimensions.get('window');
 
// var box_count = 3;
// var box_height = height / box_count;

//styles I
const styles = StyleSheet.create({
  Container: {
    justifyContent: ALIGNMENT_CENTER,
    flex: 1,
    margin: 0,
    paddingTop: 0,
  },
  MainContainer: {
    justifyContent: ALIGNMENT_CENTER,
    flex: 1,
    margin: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
  },
  
  // Home Box Style
  GridViewBlockStyle: {
    justifyContent: ALIGNMENT_CENTER,
    alignItems: ALIGNMENT_CENTER,
    flex: 1,
    height: 150,
    margin: 5,
    backgroundColor: '#2faeed',
    borderRadius: BORDER_RADIUS,
    borderColor: 'gray',
    borderWidth: 1,
  },

  TextStyle: {
    color: TEXT_COLOR,
    padding: COMMON_PADDING,
    justifyContent: ALIGNMENT_CENTER,
    textAlign: ALIGNMENT_CENTER,
    fontSize: FONT_SIZE,
    backgroundColor: BACKGROUND_COLOR_CLEAR
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F5FCFB',
    },
  bottom: {
    flex: 1,
    height:50,
    width:320,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F5FCFC',
    },
    //header
    header:{
      height: Platform.OS === 'ios' ? '100%' : '90%' ,
      width: '100%',
    },
     //footer
     footer:{
      height: '10%',
      width: '100%',
     },

     //list
     containerList: {
      flex: 1,
      flexDirection: 'row',
      padding: 0,
      marginLeft:5,
      marginRight:5,
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 5,
      backgroundColor: '#FFF',
      elevation: 3,
      borderRadius:5,
      borderColor: 'gray',
      borderWidth: 1,
      
    },
    //list item
     text:{
      flex: 1,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
     },
     image: {
      width:30,
      height:30,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
      borderRadius:5,
      borderColor: 'gray',
      borderWidth: 1,
    },
    //banner
    banner:{
      height: 50,
      width: 320,
     },
})

//styles II
const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

//styles III
const boxStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFA',
    flexDirection: 'column'  
  },
    box: {
      flex: 1
    },
    //header
    box1: {
      flex: 10,
      backgroundColor: '#2196F3'
    },
    //content
    box2: {
      flex: 1,
      backgroundColor: '#8BC34A'
    },
    //footer
    box3: {
      flex: .5,
      backgroundColor: '#e3aa1a'
    },
});

//styles III
const numberStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFA',
    flexDirection: 'column',
  },
  box: {
    flex: 1,
    margin: 2,
    justifyContent: ALIGNMENT_CENTER,
    alignItems: ALIGNMENT_CENTER,
    borderRadius: 5,
    backgroundColor: BACKGROUND_COLOR_CLEAR,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    color: 'black',
    backgroundColor: BACKGROUND_COLOR_CLEAR,
    height:48,
    paddingVertical:16,
  },
});

// Alphabets Box Style
const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    justifyContent: ALIGNMENT_CENTER,
  },
  box: {
    flex: 1,
    height: 150,
    margin: 5,
    backgroundColor: '#2faeed',
    borderRadius: BORDER_RADIUS,
    justifyContent: ALIGNMENT_CENTER,
    alignItems: ALIGNMENT_CENTER,
  },
  text: {
    color: TEXT_COLOR,
    padding: COMMON_PADDING,
    justifyContent: ALIGNMENT_CENTER,
    textAlign: ALIGNMENT_CENTER,
    fontSize: FONT_SIZE_GRID,
    backgroundColor: BACKGROUND_COLOR_CLEAR
  },
});

//styles IV
const baseStyles = StyleSheet.create({
  //container
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 0,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  //container item
  containerItem:{
    flex: 1,
    padding: 1,
    margin: 5,
   },
   //container item
  banner:{
    backgroundColor: BACKGROUND_COLOR_CLEAR,
    height: 50,
   },
});

export {styles,baseStyles,gridStyles, boxStyles, buttons, numberStyles};