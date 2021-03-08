import React from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import db from '../Config';
import firebase from 'firebase';

export default class SettingsScreen extends React.Component{
    render()
    {
        return(
            <View>
                <Text>WELCOME TO SETTINGS SCREEN</Text>
            </View>
        )
    }
}