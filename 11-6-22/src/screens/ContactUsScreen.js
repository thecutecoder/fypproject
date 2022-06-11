import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity, 
  ScrollView,
  Text,
  TextInput,
} from 'react-native';


export default class ContactUsScreen extends Component {
  
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 80, marginBottom: 30 }}>
          <ScrollView>
            <Text style={styles.textHeader}>Contact Us</Text>
            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}></View>
            <Text style={styles.textHeader}>ADDRESS</Text>
            <Text>Kulliyyah of Islamic Revealed  {"\n"} 
                    Knowledge Center and  {"\n"}
                    Human Sciences (IRKHS),  {"\n"}
                    International Islamic University Malaysia (IIUM), {"\n"} 
                    53100 Gombak,
                    Selangor
            </Text>
            <Text style={styles.textHeader}>PHONE NUMBER</Text>
            <Text>03-61965053</Text>
            <Text style={styles.textHeader}>FEEDBACK FORM</Text>
              <TextInput 
                style={styles.input}
                placeholder="Email"
              />   
              <TextInput
                 style={styles.bio}
                 placeholder="Feedback"
                 multiline={true}
                 numberOfLines={4}
              /> 
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
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
  input: {
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'90%',
    padding:20,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20,
    marginBottom:20,
  },
  bio: {
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'90%',
    padding:20,
    borderRadius:10,
    shadowOpacity:80,
    elevation:15,
    marginTop:20,
    marginBottom:20
    },
});
