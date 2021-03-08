import React from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import db from '../Config';
import firebase from 'firebase';
import AppHeader from '../Components/AppHeader';

export default class DonatingScreen extends React.Component{
    constructor(){
        super();
        this.state = {
             getRequestedItems : [],
        }
    }

    getRequestedItems = ()  => {
        this.requestRef = db.collection("requested_items")
        .onSnapshot((snapshot)=>{
          var requestedItemsList = snapshot.docs.map(document => document.data());
          this.setState({
            getRequestedItems : requestedItemsList
          });
        })
    }     

    componentDidMount()
    {
        this.getRequestedItems();
    }

    keyExtractor = ( item,index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
      style = {styles.list}
        key={i}
        title={item.item_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: '#4a148c', fontWeight: 'bold' ,fontSize:20}}
        subtitleStyle = {{color:"#4a148c",fontSize:15}}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style = {{color:"#4a148c"}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }


    render(){
        return(
            <View style = {styles.screen}>
                 <AppHeader title = "DONATE ITEMS HERE"/>
                <View style={{flex:1}}>
          {
            this.state.getRequestedItems.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Items</Text>
              </View>
            )
            :(
              <FlatList
             
                keyExtractor={this.keyExtractor}
                data={this.state.getRequestedItems}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:30,
        color:'#fff'
    },

    screen:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#4A148C',
        flex:1
    },

    button:{
        width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      borderRadius:25,
      backgroundColor:"#fff",
      marginTop:20,
      borderColor:"#4a148c",
      backgroundColor:'lightpink'
      
    },

    subContainer:{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
      width:700,
      height:60,
      backgroundColor:"cream",
      marginTop:50,
      alignSelf:'center',
      
    }

})