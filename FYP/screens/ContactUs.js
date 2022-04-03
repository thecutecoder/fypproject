import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Picker,
  TouchableOpacity,
  Button
} from "react-native";
  import { WebView } from 'react-native-webview';
 
export default class SignupUser extends Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: false
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
        <Text 
          style={styles.signText}>Contact Us
        </Text>
        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
          <Image style={styles.image} source={require("./assets/irkhs.jpg")} />
        </View>
        <Text 
          style={styles.textHeader}>
            ADDRESS
        </Text>
        <Text>
            Kulliyyah of Islamic Revealed Knowledge Center
            and Human Sciences (IRKHS), 
            International Islamic University Malaysia (IIUM), 
            53100 Gombak,
            Selangor
        </Text>
        <Text 
          style={styles.textHeader}>
            PHONE NUMBER
        </Text>
        <Text>
            03-61965053
        </Text>
        <Text 
          style={styles.textHeader}>
            FEEDBACK FORM
        </Text>
        <WebView source={{ uri: 'https://form.jotform.com/jsform/220922905458055' }} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  signText: {
    fontSize: 30,
  },

  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',

  },

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