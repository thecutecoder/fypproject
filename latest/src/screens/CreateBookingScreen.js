import React, { Component } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  ScrollView, 
} from "react-native";
//import moment from "moment";
//import {Picker} from '@react-native-picker/picker';
//import DateRangePicker from "react-native-daterange-picker";

export default class CreateBookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
      <View style={styles.container}>
         <TextInput
          style={styles.inputStyle}
          placeholder="Start Date"
          
        />  
       <TextInput
          style={styles.inputStyle}
          placeholder="End Date"
          
        />  
  
        <TextInput
          style={styles.inputStyle}
          placeholder="Guests"
          
        />
        <Picker
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) =>
          {setSelectedKulliyyah(itemValue)}}>
    
        <Picker.Item label="Time Slot" value="Time Slot" />
        <Picker.Item label="8.00-10.00" value="8.00-10.00" />
        <Picker.Item label="10.00-12.00" value="10.00-12.00" />
        <Picker.Item label="2.00-4.00" value="2.00-4.00" />
        <Picker.Item label="4.00-6.00" value="4.00-6.00" />
        </Picker>


        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}
         onPress={() => navigation.navigate('Booking Confirmation')}
        >RESERVE</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  inputStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
  },
 
 pickerStyle: {
  height: 50, 
  width: 150,
  backgroundColor: "#FFFFFF", 
  borderRadius: 30,
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