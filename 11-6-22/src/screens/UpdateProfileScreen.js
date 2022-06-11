import React, { Component } from "react";
import { 
  View,
  Text,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from "react-native";
import {auth} from "./../database/firebase"

export default class UpdateProfileScreen extends Component {
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',

      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
changeEmail = () =>{
  if(this.state.email === '')
  {Alert.alert('Enter.....')}
  else { auth.currentUser.updateEmail(this.state.email).then (() => { 
    Alert.alert("updated");
  })}
}
changePassword = () =>{
  if(this.state.password === '')
  {Alert.alert('Enter.....')}
  else { auth.currentUser.updatePassword(this.state.password).then (() => { 
    Alert.alert("updated");
  })}
}

  render() {
    return (
      
      <View style={styles.container}>
         <ScrollView style={styles.scrollView}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={{alignItems: 'center', marginTop: 80, marginBottom: 30 }}>
              <Text style={styles.name}>Ibad</Text>
              <Text style={styles.info}>User Profile</Text>
              <Text style={styles.textHeader}>Name</Text>
              <Text style={styles.description}>Ibad</Text>
              <Text style={styles.textHeader}>No Matric</Text>
              <Text style={styles.description}>1913456</Text>
              <Text style={styles.textHeader}>Kulliyyah</Text>
              <Text style={styles.description}>KICT</Text>
              <Text style={styles.textHeader}>Email</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="ibad@gmail.com"
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
              />
                <TouchableOpacity style={styles.buttonUpdate}
                    onPressIn={()=> this.changeEmail()}>
                <Text>Update</Text>  
              </TouchableOpacity> 
              <Text style={styles.textHeader}>Password</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Ibad"
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
              />
                              <TouchableOpacity style={styles.buttonUpdate}
                    onPressIn={()=> this.changePassword()}>
                <Text>Update</Text>  
              </TouchableOpacity> 
             <Text style={styles.textHeader}>Upload Profile Picture</Text>
             <TouchableOpacity style={styles.buttonUpload}>
                <Text>Choose a photo</Text>  
              </TouchableOpacity>     
          </View> 
          <View style={{alignItems: 'center', marginBottom: 30 }}>
              <TouchableOpacity style={styles.buttonUpdate}>
                <Text>Update</Text>  
              </TouchableOpacity>              
          </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "#FFE333",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#F95757",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonUpdate: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#64E647",
  },
  buttonUpload: {
    marginTop:10,
    backgroundColor: "#e7e7e7",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
   buttonDelete: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#F95757",
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2,
    marginTop: 10,

  },
  inputStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
  },
});