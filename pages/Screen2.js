//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
 
export default class Screen2 extends Component {
  //Screen1 Component
  render() {
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

        <ScrollView>
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}}
                    style={{width: 200, height: 200, borderRadius: 200, alignSelf: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 3, top: 10}}
                />
                <View style={{top: 25, width: 200, left: 105}}>
                <Button
                    title="Ubah Foto Profil"
                    onPress={() => Alert.alert('Foto Profil Berhasil Diubah')}>
                </Button>
                </View>
                <View style={{ flexDirection: "row", top: 70 }}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginRight: 10,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Your Name </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 50,
                    marginLeft: 50,
                    fontWeight: 'bold',
                    width: '50%' }}>: Andri</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Job Title  </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 20,
                    marginLeft: 74,
                    fontWeight: 'bold',
                    width: '50%' }}>: Manager Area</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Your Email </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 20,
                    marginLeft: 63,
                    fontWeight: 'bold',
                    width: '50%' }}>: andri@gmail.com</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Phone Number  </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 20,
                    marginLeft: 24,
                    fontWeight: 'bold',
                    width: '50%' }}>: 0852694513767</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Company Name  </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 20,
                    marginLeft: 17,
                    fontWeight: 'bold',
                    width: '50%' }}>: Taysbakers</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Country  </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 20,
                    marginLeft: 83,
                    fontWeight: 'bold',
                    width: '50%' }}>: Indonesia</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Address </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 20,
                    marginLeft: 83,
                    fontWeight: 'bold',
                    width: '50%' }}>: Jakarta</Text>
                </View>
                <View style={{ flexDirection: "row", top: 40}}>
                <Text style={{ color: 'black',
                    textAlign: 'left',
                    fontSize: 18,
                    marginLeft: 30,
                    fontWeight: 'bold',
                    flexDirection: "row" }}>Telephone </Text>
                <Text
                    style={{ height: 40,
                    fontSize: 18,
                    flexDirection: "row",
                    marginBottom: 50,
                    marginLeft: 65,
                    fontWeight: 'bold',
                    width: '50%' }}>: 564215</Text>
                </View>
                <View style={{ marginTop: 30}}>
                <Button
                    title="Update"
                >
                </Button>
                </View>
            </ScrollView>

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
    height: 40,
    marginLeft: 15,
    width: 40,
    resizeMode : 'stretch',
  
 }
});