import React from 'react';
import { StyleSheet, Text, View ,TextInput, Alert,TouchableOpacity,Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import db from '../Config';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render()
    {
        return(
            <View style = {{flex:1}}>
             <View style = {styles.drawerItemsContainer}>
               <DrawerItems
                {...this.props}
               />
             </View>
             <View style = {styles.LogoutContainer}> 
                <TouchableOpacity
                 style = {styles.LogoutButton}
                 onPress = {() => {
                     this.props.navigation.navigate('WelcomeScreen')
                     firebase.auth().signOut()
                 }}
                >
                  <Text style = {{fontSize:30,fontWeight:'bold'}}>Log Out</Text>
                </TouchableOpacity>
             </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    drawerItemsContainer:{
        flex:0.8
    },
    LogoutContainer:{
        flex:0.2,
        justifyContent:"flex-end",
        paddingBottom:30
    },
    LogoutButton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10
    }
})