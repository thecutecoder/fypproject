import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

import {firstRoom, secondRoom, thirdRoom,fourthRoom} from '../model/data';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

export default function RoomDetailScreen() {

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  clickEventListener = () => {
    Alert.alert("Success", "Product has beed added to cart")
  };

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
             <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={firstRoom}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
            <Text style={styles.name}>Venue 1: ADM LR 1</Text>
            <Text style={styles.price}>Located at:</Text>
            <Text style={styles.description}>
             ADM Building, Level 2
            </Text>
            <Text style={styles.price}>Head count:</Text>
            <Text style={styles.description}>
             4-5 people
            </Text>
            <Text style={styles.price}>Utilities:</Text>
            <Text style={styles.description}>
             Fully air-conditioned, projector provided
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Reserve</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:20,
    color:"#696969",
    fontWeight:'bold',
    marginTop:20
  },
  price:{
    marginTop:10,
    fontSize:15,
    color:"black",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  }
});    