import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TextInput, Button, View, YellowBox } from 'react-native'
import {Supply} from './Supply'
import { useFonts } from 'expo-font';



export const Home = ({borrow, supply}) =>{

    const [loaded] = useFonts({
        Neue: require('../assets/fonts/NeueHaasDisplayMediu.ttf'),
      });
      
      if (!loaded) {
        return null;
      }



    const styles = StyleSheet.create({

        balancesStyle:{
            flexDirection: "row",
            justifyContent : "space-evenly",
            width: "100%",
        },
        balanceCol: {
            display : "flex",
            flexDirection : "column",
            alignItems: "center"
        },
        supplyText:{
            color : "#00D395", 
            fontFamily : "Neue", 
            fontSize: 16
        },
        borrowText:{
            color : "#9669ED", 
            fontFamily : "Neue", 
            fontSize: 16
        },
        supboramtText:{
            color : "white", 
            fontFamily : "Neue", 
            fontSize: 20,
            marginTop: 7
        },
        
        

        
    })



    return(
        <View >
            
            {/* balances view */}
            <View style = {styles.balancesStyle}>
                <View style = {styles.balanceCol}>
                    <Text style = {styles.supplyText}>Supply Balance</Text>
                    <Text style = {styles.supboramtText}>${supply}</Text>
                </View>

                <View style = {styles.balanceCol}>
                    <Text style = {styles.borrowText}>Borrow Balance</Text>
                    <Text style = {styles.supboramtText}>${borrow}</Text>

                </View>
            </View>




            {/* supply / balances dashboard */}
            <View>

            </View>

        </View>
    )

    

}
