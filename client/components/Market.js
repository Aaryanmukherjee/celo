import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TextInput, Button, View, YellowBox,TouchableHighlight, Modal, Pressable } from 'react-native'
import { useFonts } from 'expo-font';


export const Market = ({label, onPress}) =>{

    const [modalVisible, setModalVisible] = useState(false);

    const [loaded] = useFonts({
        Neue: require('../assets/fonts/NeueHaasDisplayMediu.ttf'),
    });
      
    if (!loaded) {
        return null;
    }

    
    

    const styles = StyleSheet.create({    
        main:{
            backgroundColor: "white",
            flexDirection: "column",
            borderRadius: 5,
            width: "90%",
            marginTop: 30,
            fontFamily: "Neue",
            
        },
        labelContainer: {
            borderBottomColor: "rgba(0, 0, 0, 0.05)",
            borderBottomWidth: 1,
        },
        labelText:{
            fontSize: 18,
            fontFamily: "Neue",
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20
        },
        tableHeader:{
            flexDirection: "row",
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            borderBottomColor: "rgba(0, 0, 0, 0.05)",
            borderBottomWidth: 1,

        },
        tableHeaderText:{
            color:"#AAB8C1",
            fontWeight: "600"
        },
        currency:{
            flexDirection: "row",
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 5
        },
        tinyLogo:{
            width: 50,
            height: 50,
        
        },
        assetDesc:{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center"
        },
        assetText:{
            fontSize: 12

        },
        touch:{
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,

        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            backgroundColor: "rgba(0,0,0,.5)"
        },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
          
        
    })
    return(
        <View style = {styles.main}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style = {styles.labelContainer}>
                <Text style = {styles.labelText}>{label}</Text>
            </View>
            <View style = {styles.tableHeader}>
                <View style = {{flex: 2}}>
                    <Text style = {styles.tableHeaderText}>Asset</Text>
                </View>
                <View style = {{flex: 1}}>
                    <Text style = {styles.tableHeaderText}>Wallet</Text>
                </View>
                <View style = {{flex: 1}}>
                    <Text style = {styles.tableHeaderText}>Collateral</Text>
                </View>
            </View>
            <TouchableHighlight 
                onPress = {() => {setModalVisible(true); onPress()}} 
                activeOpacity={0.6}
                underlayColor="#DDDDDD" 
                style = {styles.touch}>
                <View style = {styles.currency}>
                    {/* asset */}
                    <View style = {{flexDirection:"row", flex: 2}}>
                        <Image style = {styles.tinyLogo} source={require("../assets/black-wallet-rings.png")}></Image>
                        <View style = {styles.assetDesc}>
                            <Text style = {styles.assetText}>Celo</Text>
                            <Text style = {[styles.assetText,{color : "#AAB8C1"}]}>6%</Text>
                        </View>

                    </View>

                    {/* wallet */}
                    <View style = {{flex: 1}}>
                        
                    </View>

                    {/* collateral */}
                    <View style = {{flex: 1}}>
                        
                    </View>
        
        
                </View>
            </TouchableHighlight>
            
        </View>
    )
}