import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  state = {
    connected: true
  };

  componentDidMount() {
 /*
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
*/
  }

  componentWillUnmount() {
    /*
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log(
           'Subscribe Connection type: ' + 
            state.type + 
           ', Is connected?: ' + 
            state.isConnected);
            var connected = state.isConnected;
            this.setState({ connected });
      });*/
  }

  render() {
    if (this.state.connected) {
       return null;
    }{
      return <MiniOfflineSign />;
    }
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0
  },
  offlineText: { color: '#fff' }
});

export default OfflineNotice;