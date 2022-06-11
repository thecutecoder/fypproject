import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {auth,database} from "../database/firebase";
import "firebase/firestore";
import * as firebase from 'firebase';

export default function ProfileScreen({navigation}) {
  

  return (
    
    <View>
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
              <Text style={styles.textHeader}>Email</Text>
              <Text style={styles.description}>ibad@gmail.com</Text>
              <Text style={styles.textHeader}>Password</Text>
              <Text style={styles.description}>******</Text>
              <Text style={styles.textHeader}>Kulliyyah</Text>
              <Text style={styles.description}>KICT</Text>
          </View>
          <View style={{alignItems: 'center', marginBottom: 30 }}>
              <TouchableOpacity style={styles.buttonUpdate}>
                <Text
                onPress={() => navigation.navigate('Update Profile')}
                >Update</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonDelete}>
                <Text>Delete</Text> 
              </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
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
});
