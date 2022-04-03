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
 
export default class SignupUser extends Component {
  
  constructor() {
    super();
    this.state = {
      displayName: '', 
      matricNo: '',
      email: '', 
      password: '',
      kulliyyah: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          matricNo: '',
          email: '', 
          password: '',
          kulliyyah: ['KICT', 'KAED', 'ECONs', 'AIKOL', 'IRKHS', 'ENGIN', 'CELPAD'],
        })
        this.props.navigation.navigate('Login')
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
        <Image style={styles.image} source={require("./assets/logo.png")} />

        <View style={styles.inputView}><TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />  
        </View>

        <View style={styles.inputView}><TextInput
          style={styles.inputStyle}
          placeholder="Matric No"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'matricNo')}
        />  
        </View>

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

        <View style={styles.inputView}>
        <Picker
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => this.setState({ kulliyyah: itemValue })}
      >
        <Picker.Item label="Kulliyyah" value="Kulliyyah" />
        <Picker.Item label="KICT" value="KICT" />
        <Picker.Item label="KAED" value="KAED" />
        <Picker.Item label="ECONS" value="ECONS" />
        <Picker.Item label="AIKOL" value="AIKOL" />
        <Picker.Item label="IRKHS" value="IRKHS" />
        <Picker.Item label="ENGIN" value="ENGIN" />
        <Picker.Item label="CELPAD" value="CELPAD" />
      </Picker>
        </View>
             
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}
        onPress={() => this.registerUser()}
        >SIGN UP</Text>
      </TouchableOpacity>

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Sign In')}>
          Already registered? Click here to sign in
        </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  signText: {
    fontSize: 30,
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