//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
 
export default class Screen3 extends Component {
  //Screen1 Component
  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={{backgroundColor:'#4287f5'}}>
          
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image 
          source={require('../image/drawer3.png')} 
          style={styles.ImageIconStyle} 
          />
          </TouchableOpacity>
       
          </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Screesdn3 </Text>
      <Button title="Click here to Logout" onPress={ () => goBack(null) } />
      </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    marginLeft: 15,
    height: 40,
    width: 40,
    resizeMode : 'stretch',
  
 }
});