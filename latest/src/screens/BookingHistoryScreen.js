import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal
} from 'react-native';

export default class BookingHistoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
          name:"Booking History", 
          id:3, 
          bdate:"1/2/2022", 
          bvenue: "Venue 2: ADM LR 4" 
        },
        {
          id:2, 
          bdate:"11/2/2022", 
          bvenue: "Venue 3: ADM LT 1" 
        },
        {
          id:4, 
          bdate:"20/3/2022", 
          bvenue: "Venue 3: ADM LT 1" 
        },
        {
          id:5, 
          bdate:"28/3/2022", 
          bvenue: "Venue 2: ADM LR 4" 
        },
        {
          id:1, 
          bdate:"1/4/2022", 
          bvenue: "Venue 1: ADM LR 1" 
          
        },
        {
          id:6, 
          bdate:"15/4/2022",  
          bvenue: "Venue 1: ADM LR 1" 
        },
        {
          id:7, 
          bdate:"10/5/2022", 
          bvenue: "Venue 2: ADM LR 4" 
        },
      ]
    }
  }

  renderBookingDetails = (group) => {
    if(group.details) {
      return (
        <View style={styles.groupDetailsContent}>
          {group.details.map((prop, key) => {
          })}
        </View>
      );
    }
    return null;
  }

  
render_FlatList_header = () => {
 
  var header_View = (

    <View style={{
      height: 45,
      width: "100%",
      backgroundColor: "#00B8D4",
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Text style={{ fontSize: 24, color: 'white' }}> Booking History</Text>

    </View>
  );

  return header_View ;

};

  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      
      <FlatList
      ListHeaderComponent={this.render_FlatList_header}
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Group = item.item;
          let mainContentStyle;
          if(Group.attachment) {
            mainContentStyle = styles.mainContent;
          }
          return(
          <View>
            <View style={styles.container}>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <Text style={styles.bdate}>
                    {Group.bdate} 
                  </Text>
                  <Text style={styles.timeAgo}>
                    {Group.bvenue} 
                  </Text>
                  {this.renderBookingDetails(Group)}
                  <TouchableOpacity style={styles.followButton} onPress={() => {}}>
                  <Text style={styles.followButtonText}
                           onPress={() => this.props.navigation.navigate('Booking Details')}
                  >click here</Text>  
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:55,
    height:55,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  memberImage: {
    height: 30,
    width: 30,
    marginRight:4,
    borderRadius:10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"  
  },
  bdate:{
    color:"#20B2AA"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  groupName:{
    marginLeft:10,
    fontSize:23,
    color:"#1E90FF"
  },
  groupDetailsContent:{
    flexDirection:'row',
    marginTop:10
  },
  followButton: {
    marginTop:10,
    height:25,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:10,
  },
});  