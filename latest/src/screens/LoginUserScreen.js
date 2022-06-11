import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
 import {auth} from "./../database/firebase"
export default class LoginUserScreen extends Component {

    constructor() {
      super();
      this.state = { 
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
  
    userLogin = () => {
      if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter details to signin!')
      } else {
        this.setState({
          isLoading: true,
        })
        
        auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully!')
          this.setState({
            isLoading: false,
            email: '', 
            password: ''
          })
          this.props.navigation.navigate('Home')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }
    }
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
      return (
        <View style={styles.container}>  
          <Image style={styles.image} source={require("../assets/logo.png")} />
         
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
            />
          </View>
         
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />   
          </View>
            
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}
            onPress={() => this.userLogin()}>LOGIN</Text>
          </TouchableOpacity>
  
          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Sign Up')}>
            Don't have account? Click here to sign up
          </Text> 
        </View>
      );
    }
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE333",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    alignItems: "center",
    marginBottom: 40,
    width: 350, 
    height: 200,
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF5733",
  },
});