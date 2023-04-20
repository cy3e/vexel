import React from "react";
import { View } from "../components/Themed";
import { Text, Pressable } from "react-native";
import { RootTabScreenProps } from "../types";

export default function itempage(_itemid: any, { navigation }: RootTabScreenProps<'Home'>){



    return(
        <View>
            <></>
            <Pressable onPress={() => navigation.navigate('itempage')/* make the payment*/}></Pressable>
        </View>
    )
}