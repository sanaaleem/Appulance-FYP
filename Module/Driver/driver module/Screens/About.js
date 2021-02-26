import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

 function About(props) {
    return (
        <View style={styles.container}>
        <View style={styles.containerBOX}>
            <Text style={styles.heading}>ABOUT</Text>
            <Image source={require('./images/LOGO/Logo.png')} style={{height:300,width:390}}></Image>
        </View>
        <Text style={styles.text}>We are here to help you and your loves one in critical suitation.
        you can book an ambulance through us to save your loves ones life.</Text>
        </View>
    )
}
export default About;
const styles=StyleSheet.create({
    logo:{
        height:150,
        width:250,
        marginTop:60
    },
    containerBOX:{
        alignItems: 'center',
    },
    heading:{
        fontSize:60,
        color:'white',
        marginTop:30,
        fontWeight:"bold"
    },
    container: {
        flex: 1,
        backgroundColor: '#ff5b5b',
      },
      text:{
          marginTop:30,
          fontSize:25
      }
})