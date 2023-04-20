import React, { useState } from "react";
import { Text, View } from '../components/Themed';
import {Pressable, StyleSheet, Image} from "react-native"
import { Card, Checkbox, Chip, TextInput } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import * as picker from 'expo-image-picker';

let isselected = false
const test = () => {
    if (isselected == true) {
        console.log("hola")
    }
    else{
        console.log("adios")
    }
}

export default function SellItems(){
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await picker.launchImageLibraryAsync({
            mediaTypes: picker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        console.log(result);
        
        if (result.canceled  == false) {
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    };


    return (
        <View>
            
            <Card style = {styles.Card}>
                <Card.Title style = {styles.txt} title="what you want to sell" subtitle="Card Subtitle" />
                <Card.Content>
                    <View>
                        <TextInput  mode="outlined" label="articulo" placeholder="Type something"right={<TextInput.Affix text="/100" />}/>
                        <TextInput  mode="outlined" label="Descripcion" placeholder="Type something"right={<TextInput.Affix text="/100" />}/>
                        <TextInput  mode="outlined" label=" precio" placeholder="Type something"right={<TextInput.Affix text="/100" />}/>
                    </View>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                    <Text style={styles.txt}> Condicion</Text>
                    <View style ={styles.condition}>
                        <Chip icon="check" onPress={test} selected = {isselected} style ={styles.excellent}>excelent condition</Chip>
                        <Chip icon="alert" onPress={() => isselected = true} style={styles.good}>good condition</Chip>
                        <Chip icon="image-broken" onPress={() => console.log('Pressed')} style = {styles.damaged}>for parts or broken</Chip>
                    </View>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                    <Checkbox.Item label="Acept offer" status={"unchecked"} />
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                        <Pressable onPress={pickImage}><Text>Choose an Image</Text></Pressable>
                        {image && <Image source={{ uri: image }} style={{ width: 1020, height: 650 }} />}
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                    <View>
                        {image && <Image source={{uri: image}} />}
                    </View>
                </Card.Content>
                    <Card.Actions>
                        <Pressable>
                            <Text>Ok</Text>
                        </Pressable>
                        <Pressable>
                            <Text>Cancel</Text>
                    </Pressable>
                </Card.Actions>
            </Card>
        </View>
    )    
} 

const styles = StyleSheet.create({
    container:{
        
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
    txt: {
        alignSelf: 'center',
        fontSize: 18,

    },
    Card:{
        paddingHorizontal:10,
        marginVertical: 5,
        backgroundColor: "white",
        elevation: 3,
        alignItems: 'center',
    },
    input:{

    },
    condition:{

    },
    excellent:{
        marginTop: 5,
        backgroundColor: '#09B90C',
        marginBottom: 10
    },
    good: {
        backgroundColor: '#DDE80E',
        marginBottom: 10

    },
    damaged:{
        backgroundColor: '#C70039',
        marginBottom: 10

    },
})


