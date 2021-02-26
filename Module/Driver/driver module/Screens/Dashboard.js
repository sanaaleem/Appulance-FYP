import React, { useState, useRef } from 'react';
import { StyleSheet, Dimensions, Text, View, TextInput, Button,Alert} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import imagePath from './images/imagePath/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showError, showSuccess } from '../Screens/images/helper/helperFunction'


const Dashboard = (props) => {
  const [flag, setFlag] = useState({
    flagVal:{
       // val:0
    }
  }
  )
  const {flagVal } = flag
  const [state, setState] = useState({
    pickupCords: {
      latitude: 30.3753,
      longitude: 69.3451,
    },
    droplocationCords:
    {
      latitude: 24.8916,
      longitude: 67.0681,
    }
  })
  const { pickupCords, droplocationCords } = state
  var  createTwoButtonAlert = () =>
 
    Alert.alert(
      "Incoming Request",
   "Request",
      [
        {
          text: "Accept",
          onPress: () => {
            console.log("Accepted")
            //alert("you ride is waiting for you")
            showSuccess("you ride is waiting for you")
            setFlag({
             ...flag, flagVal:{
                  val:1
              }
            }
            )
            
            
        },
          style: "cancel"
        },
        { text: "Reject", onPress: () => {
          console.log("rejected")
       }}
      ],
      { cancelable:  false }
    );
  const mapRef = useRef()
 
  const onpressLocation=()=>{
//Navigation.navigate("DriverSignUp")

  }
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: Number(24.9089),

            longitude: 67.0602,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0421
          }
          }
        >
          <Marker
            coordinate={{
              latitude: Number(24.9089),

              longitude: 67.0602
            }} />
          {Object.keys(flagVal).length > 0 && ( <Marker
            coordinate={droplocationCords}
            image={imagePath.dm} /> )}
          {Object.keys(flagVal).length > 0 && (<MapViewDirections
         origin={ {latitude:Number(24.9089),
          
          longitude:67.0602}}
         destination={droplocationCords}
        //apikey='AIzaSyB66LLwN2cyVKzR1MyCUSKo5OUf7PLK0_c'
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result=>{
            mapRef.current.fitToCoordinates(result.coordinates,{
              edgePadding:{
                right:30,
                bottom:300,
                left:30,
                top:100
              }
            })
          }}
        />  )}
        </MapView>
      </View>
      <View style={styles.bottomCard}>
    <Text style={styles.fontStyle}>Are you ready to serve Humanity? </Text>
    <Text style={styles.fontStyle}>So, What are you waiting for? </Text>
         <TouchableOpacity style={styles.Input}
     onPress={() =>
       createTwoButtonAlert()}
        >
          <Text style={{textAlign:"center", fontSize:20, color:'#ff5b5b' }}> Tap Here  </Text>

        </TouchableOpacity>
      
      </View>


    </View>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
    height:Dimensions.get('window').height
    },
    Input:{
      borderWidth:1,
      borderRadius:  4,
      borderColor:'#fff',
      padding:8,
      margin:10,
      width:80,
      height:40,
      backgroundColor:'#ff5b5b',
      alignItems:'center',
      justifyContent:'center',
      margin:10 ,
    },
    bottomCard:{
      backgroundColor:'#ff5b5b',
      width:'100%',
      padding:30,
      borderTopEndRadius:24,
      borderTopStartRadius:24

    },

    fontStyle:{
      color: '#fff',
      fontSize: 15,
      alignItems:'center'
    },

  Input:{
    borderWidth:1,
    borderRadius: 4,
    borderColor:'#777',
    padding:8,
    marginTop:16,
    width:300,
    backgroundColor:'#fff',
    height:40,
  },


    /////////////////////////////////
    fontStyleHeading:{
      color: '#fff',
      fontSize: 30 
  
    },
    
    button: {
      marginBottom: 20,
      padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 10,
  },
  spaceLogo: {
    width: 20, // or whatever size you need
    height: 30,
  },
  TextLink: {
    color:'#fff' ,padding:3,textDecorationLine:"underline"
  },
  textC:{
    color:'#b40505'
  }
  });
  
  