import React, { Component, useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Card, IconButton, MD3Colors } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Table, Row,Rows } from 'react-native-table-component';
import { CommonActions } from '@react-navigation/native';

//firestore
import firestore from '@react-native-firebase/firestore';

let itemdata = "data"
let condition = "new"

export default function HomeScreen(this: any, { navigation }: RootTabScreenProps<'Home'>){
  
  function items() {
    const [loading, setLoading] = useState (true);
    const [users, setusers] = useState ([]);
    
    useEffect(() => {
      const subcriber = firestore().collection('items').onSnapshot(() => {

        const items = [];

        querySnapshot.forEach((documentSnapshot: { data: () => any; id: any; }) => {
          items.push({
            ...documentSnapshot.data(),
            key:documentSnapshot.id,
          });
        });

      });

      return () => subcriber ();
    }, []);

    if (loading)
    {
      return <ActivityIndicator/>;
    }
  }

  return (
    <FlatList
       data={items}
       renderItem={({items}) => (
        <View>
          <Text>{items.name}</Text>
          <Text>{items.condition}</Text>
          <Text>{items.price}</Text>
          <Pressable onPress={() => navigation.navigate('itempage', items.id)} ></Pressable>
        </View>
       )}
    />  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 5,
  },
  separator: {
    height: 1,
    width: '80%',
    alignSelf: "center",
    marginBottom: 5
  },
  Card:{
    marginVertical: 5,
    color: "black",
    elevation: 3,
    width: "80%",
    height: "75%",
  },
  Cardcontent: {
  },
  condition:{
    textAlign: "center",
    fontSize: 16,
    marginBottom:5,
  },
  imagecontent: {
    marginBottom: -10,
    width: "100%",
    height: "75%",
    borderRadius: 1

  },
  text: {

  },
  head:{
    
  }
});
