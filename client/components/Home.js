import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TextInput, Button, View, YellowBox } from 'react-native'
import {Supply} from './Supply'

export const Home = () =>{
    const [borrow, setBorrow] = useState(0)
    const [supply, setSupply] = useState(0)

    const balancesStyle = {
        display : "flex",
        justifyContent : "space-around"
    }

    const balanceCol = {
        display : "flex",
        flexDirection : "column",
        alignItems: "center"
    }



    return(
        <View>
            
            {/* balances view */}
            <View style = {balancesStyle}>
                <View style = {balanceCol}>
                    <Text style = {{color : "green"}}>Supply Balance</Text>
                    <Text>{supply}</Text>
                </View>

                <View style = {balanceCol}>
                    <Text style = {{color : "purple"}}>Borrow Balance</Text>
                    <Text>{borrow}</Text>
                </View>
            </View>

        </View>
    )

}
