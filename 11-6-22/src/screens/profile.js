import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import "firebase/firestore";
import * as firebase from 'firebase';

 let username;
class Profile extends Component {

  onTestClick = ()=>{
   const dbRef = firebase.database().ref("Reg");
    dbRef.set("hello world from app")
  }

  readUserData =() => {
    console.log('test oke');
    firebase.database().ref('Reg/').on('value', function (snapshot) {
        test = snapshot.val();
        this.setState({ MatricNo: test });
        console.log(this.state.matricNo);
    });
}

  render() {
      return (
        <ScrollView>

        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>{this.username}</Text>
            <Button title={"Create test record"} onPress={this.readUserData}></Button>
          </View>
        </View>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      marginTop: 300,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 15,
    },
    button: {

    }
  });

  export default Profile;