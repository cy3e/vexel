import React, { useState } from 'react';
import { 
  StyleSheet,
  Button,
  Image,
  Alert,
  Pressable,
  ImageBackground
} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { Provider as PaperProvider } from 'react-native-paper'; 

// New Account page inport

//import 

const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

export default function WelcomeScreen({ navigation }: RootStackScreenProps<"Root">){


  return (
    <PaperProvider>
      <View style={styles.container} >
      <ImageBackground source={image} style={styles.background}/>
      <Pressable 
        style = {styles.btn} 
        onPress={() => navigation.navigate('Main')}
              >
        <Text style ={styles.btntext}>use a Vexel account</Text>  
        
      </Pressable>
        <Text onPress={() => Alert.alert('Simple Button pressed')} style = {styles.text} >Not have an account</Text>
    </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text : {
    color: '#87cefa'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9932cc',
  },
  btntext: {  
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  },
  background:{

  },

});
