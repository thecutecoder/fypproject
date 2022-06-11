import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

export default function BookingDetailsScreen({navigation}) {
  return (
    <View>
    <View style={{marginLeft:20, marginBottom: 30 }}>
     <Text style={{ fontSize: 24, color: 'black'}}> Booking Confirmed!</Text>
     <Text style={styles.description}>Confirmation code: 12345</Text>
      </View>
      <Divider />
     <View style={{alignItems: 'left', marginTop: 10, marginBottom: 30, marginLeft:30 }}>
              <Text style={styles.textHeader}>Venue:</Text>
              <Text style={styles.description}>ADM LR 1</Text>
              <Text style={styles.textHeader}>Start Date:</Text>
              <Text style={styles.description}>1/6/2022</Text>
              <Text style={styles.textHeader}>End Date:</Text>
              <Text style={styles.description}>1/6/2022</Text>
              <Text style={styles.textHeader}>Time Slot:</Text>
              <Text style={styles.description}>10 AM - 12 PM</Text>
              <Text style={styles.textHeader}>Guests:</Text>
              <Text style={styles.description}>2 pax</Text>
              
      </View>
      <Divider />
        <View style={{alignItems: 'center', marginBottom: 30 }}>
              <TouchableOpacity style={styles.buttonUpdate}>
                <Text>Cancel Booking</Text>  
              </TouchableOpacity>              
          </View>

     
    </View>
  );
}


const styles = StyleSheet.create({
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'left',
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2,
    marginTop: 10,
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
    backgroundColor: "#F96C6C",
  },
});
