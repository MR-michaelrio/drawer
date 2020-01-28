//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Picker, Button, Alert} from 'react-native';
// import all basic components
import { Header, Right} from 'native-base';


export default class Screen1 extends Component {
  constructor() {
 
    super()
 
    this.state = {
 
      InputName: '',
      InputPassword: '',
      InputPicker1: '',
      InputPicker2: '',
      InputEmail: '',
      InputPhone: ''
 
    }
 
  }
  clickme=()=>{
    var data = this.state.InputPicker1;
    var data = this.state.InputPicker2;
    if(data==""){
        alert("Please Select an option");
    }else{
        alert(data);
    }
    alert(this.state.InputPicker1);
    alert(this.state.InputPicker2);
}
  InsertData = () =>{
 
    fetch('http://192.168.4.33/reactnative/InsertData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        fullname: this.state.InputName,
    
        pass: this.state.InputPassword,
    
        picker1: this.state.InputPicker1,
        
        picker2: this.state.InputPicker2,
    
        email: this.state.InputEmail,
    
        phone: this.state.InputPhone
    
      })
    
    }).then((response) => response.json())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
   
  }
  
  
   render() {
     return (


  <View style={styles.MainContainer}>
    <View style={{backgroundColor:'#4287f5'}}>

            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.FacebookStyle} activeOpacity={0.5}>
            <Image 
            source={require('../image/drawer3.png')} 
            style={styles.ImageIconStyle} 
            />
            </TouchableOpacity>
          </View>
          <View style={styles.text}>
              <Text style={{fontSize: 20,fontWeight: 'bold'}}>Student Registration Form</Text>
              </View>
          <View>
             <View style={styles.Merge}>
                <Text style={styles.BorddererText}>Full Name &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</Text>
                <TextInput
                    //placeholder={this.state.email}
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="black"
                    editable={true}
                    onChangeText={fullname => this.setState({InputName : fullname})}/>
            </View>

            <View style={styles.Merge}>
                <Text style={styles.BorddererText}>Password &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</Text>
                <TextInput
                    //placeholder={this.state.email}
                    secureTextEntry={true}
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="black"
                    editable={true}
                    onChangeText={pass => this.setState({InputPassword : pass})}/>
           </View>

           <View style={styles.Merge}>
                <Text style={styles.BorddererText}>Position&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Text>
                <Picker
              style={{width:'100%',marginTop:-10}}
              selectedValue={this.state.InputPicker1}
              onValueChange={(picker1) => this.setState({InputPicker1:picker1})}
            >
            <Picker.Item label="Pilih Nomor" value="Pilih Nomor"/>
            <Picker.Item label="1" value="1"/>
            <Picker.Item label="2" value="2"/>
            <Picker.Item label="3" value="3"/>
            </Picker>
            </View>

            <View style={styles.Merge}>
                <Text style={styles.BorddererText}>Position&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Text>
                <Picker
              style={{width:'100%',marginTop:-10}}
              selectedValue={this.state.InputPicker2}
              onValueChange={(picker2) => this.setState({InputPicker2:picker2})}
            >
            <Picker.Item label="Pilih Nomor" value="Pilih Nomor"/>
            <Picker.Item label="5" value="5"/>
            <Picker.Item label="6" value="6"/>
            </Picker>
            </View>

            <View style={styles.Merge}>
                <Text style={styles.BorddererText}>Email&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;:</Text>
                <TextInput
                    //placeholder={this.state.email}
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="black"
                    editable={true}
                    onChangeText={email => this.setState({InputEmail : email})}/>
            </View>

            <View style={styles.Merge}>
                <Text style={styles.BorddererText}>Phone&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Text>
                <TextInput
                    //placeholder={this.state.email}
                    style={styles.TextInputStyleClass}
                    underlineColorAndroid="black"
                    editable={true}
                    onChangeText={phone => this.setState({InputPhone : phone})}/>
            </View>
            
                    <View style={{flexDirection: 'row'}}>
                 <View style={{flex:1,marginTop:30}} >
                 <Button title="save" activeOpacity = { .4 } onPress={this.InsertData}></Button>
                </View>    
               
         </View>
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
  body:{
    marginTop:20,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    marginLeft: 15,
    height: 40,
    width: 40,
    resizeMode : 'stretch',
  
 },
 
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "gray",
    marginBottom:10,
    position: 'absolute',
    marginTop:-15,
    marginLeft:150
  },
      centertext: {
        height: 50,
        textAlign: 'center',
        color: 'grey',
        fontSize: 30,
        width: '100%',
        borderColor: '#009688',
        backgroundColor: "#52c5d8",
        marginBottom: 10
    },
    centeringButtonDetail: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
 
    },
    text:{
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
    },
    uploadAvatar: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    conPreview: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
 
        backgroundColor: "#52c5d8",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
    },
    containerTakeFoto: {
 
 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
 
    Merge: { flexDirection: "row" },
    rowingdata: {
 
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
 
    },
 
    centeringButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    TextInputStyleClass:
    {
 
        textAlign: 'center',
        height: 40,
        backgroundColor: "#fff",
        flexDirection: "row",
        //  borderWidth: 1,
        //  borderColor: '#009688',
        // borderRadius: 7,
        marginBottom: 10,
        width: '60%'
    },
 
    TouchableOpacityStyle:
    {
        backgroundColor: "#f78f20",
        // height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40, 
    },
 
    TouchableOpacityStyleProfile:
    {
        backgroundColor: "#f78f20",
        // height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
        marginHorizontal: 10,
 
 
 
    },
    TouchableTakeFoto:
    {
 
        // height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
 
 
 
    },
    BoxCust:
    {
        textAlign: 'center',
        color: 'grey',
        fontSize: 30,
        borderWidth: 0.2,
        backgroundColor: "#fff",
        // height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 50,
        borderRadius: 17,
        position: 'absolute',
        top: 90,
 
    },
 
    TextStyle:
    {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
 
    BorddererText:
    {
        color: 'grey',
        textAlign: 'left',
        fontSize: 18,
        marginRight: 10,
        marginLeft: 30,
        fontWeight: 'bold',
        flexDirection: "row"
    },
 
    ActivityIndicatorStyle: {
 
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
 
    }
});