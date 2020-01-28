//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions, Image, Button} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import login from './menulogin'
import { createAppContainer } from 'react-navigation';
 
export default class App extends Component {
  //Screen1 Component
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return (
      <AppNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height:150, backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./image/chats-icon.png')} style={{height: 120, width:120, borderRadius: 60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

/*const AppDrawerNavigator = createDrawerNavigator({
  InputData : Screen1,
  Profile : Screen2,
  Details : routescreen3,
  Details2: login
},
{
  contentComponent: CustomDrawerComponent
});*/

const AppDrawerNavigator = createDrawerNavigator({
  InputData: {
    screen: Screen1,
  },
  Profile: {
    screen: Screen2,
  },  
  Details: {
    screen: Screen3,
  },
  Details2: {
    screen: login,
    navigationOptions: {
      drawerLabel: 'LogOut',
    },
  },
},
{
  contentComponent: CustomDrawerComponent
});