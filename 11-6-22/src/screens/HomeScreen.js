import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {firstRoom, secondRoom, thirdRoom,fourthRoom} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
        </View>

        <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Venue 1: ADM LR 1
          </Text>
        <View style={{ marginBottom: 20}}>
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
        <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}
           onPress={() => navigation.navigate('Room Details')}
          >See More</Text>
        </TouchableOpacity>
        </View>

        <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Venue 2: ADM LR 4
        </Text>  
        <View style={{ marginBottom: 20}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={secondRoom}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See More</Text>
        </TouchableOpacity>
        </View>

        <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Venue 3: ADM LT 1
        </Text>  
        <View style={{ marginBottom: 20}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={thirdRoom}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See More</Text>
        </TouchableOpacity>
        </View>

        <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Venue 4: HS Riverside
        </Text> 
        <View style={{ marginBottom: 20}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={fourthRoom}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See More</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
