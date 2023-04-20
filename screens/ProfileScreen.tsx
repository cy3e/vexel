import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';

//theme react-paper
import { Avatar, Card} from 'react-native-paper';

//others imports 
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

let condition = "nuevo"
let price = "0.00065"


export default function ProfileScreen({ navigation }: RootStackScreenProps<"Profile">){
  return (
    <View style={styles.container}>
      <Avatar.Text size ={76} label="XD"/>
      <Text style={styles.title}>Xander Doutch</Text>
      <Pressable 
        style = {styles.btn} 
        onPress={() => navigation.navigate('SellItem')}
      ><Text style ={styles.btntext}>Sell an item </Text>        
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Card style = {styles.Card}>
        <Text style ={styles.cardtitle} >Card Title</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Card.Content>
        <Text style ={styles.condition}>{condition}</Text>
        <Text style ={styles.price}>{price} 
          <Text style={styles.currency}> ETH</Text> 
          <Text> = </Text>
          <Text style ={styles.price}>150
            <Text style={styles.currency}> USD</Text>
          </Text>
        </Text>  
        </Card.Content>
        <Card.Cover style= {styles.imagecontent} source={{ uri:'https://picsum.photos/850/1250' }} />
      </Card>

      {/* Use a light status bar on iOS to account for the black space above the Profile */}
      <StatusBar style={Platform.OS == 'ios' ? 'light' : 'auto'} />
    </View>
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
    marginBottom: 10

  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 2,
    backgroundColor: "#d3d93b",
    marginBottom: 15
  },
  btntext:{

  },
  cardtitle: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 5,
  },
  Card:{
    marginVertical: 5,
    color: "black",
    elevation: 3,
    width: "80%",
    height: "55%",
  },
  Cardcontent: {
  },
  condition:{
    textAlign: "center",
    fontSize: 16,
    marginBottom:5,
  },
  imagecontent: {
    width: "100%",
    height: "80%",
    borderRadius: 1
  },
  price:{
    textAlign: "center",
    fontSize: 12,
  },
  currency:{
    color: "black",
    fontWeight: "bold",
    paddingLeft: 2
  },
});
