import React, { useState, useEffect, useRef,useLayoutEffect } from 'react';
import { StyleSheet, Dimensions, Text, View, LogBox, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from './images/imagePath/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showError, showSuccess } from '../Screens/images/helper/helperFunction'


const Dashboard = (props, route, navigation) => {
  //const GOOGLE_PLACES_API_KEY = 'AIzaSyB66LLwN2cyVKzR1MyCUSKo5OUf7PLK0_c';

    useEffect(() => {
      LogBox.ignoreLogs(['Error on GMAPS route request: ZERO_RESULTS']);
      LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  }, [])
  const mapRef = useRef()
 const { user,pass } = props.route.params;
 ////latitudes
  const [state, setState] = useState({
    startingCords: {
      latitude: 24.9089,
      longitude:67.0602,
    },
    destinationCords:
    {
      // latitude: 24.9089,
      // longitude:67.0602
    }
  })
  const { startingCords, destinationCords } = state

  /// name 
//   const [placeName, setplaceName] = useState({
//     startingplaceName: {
//      startName:'Kaachi'
//     },
//     destinationplaceName:
//     {
//       endName:'isl'
//     }
//   })
//  const {startingplaceName, destinationplaceName} = placeName

    //console.log("dash", props.route.params)
    const name=props.route.params.user
    //console.log(name)

  const fetchValues = (data) => {

    //console.log(startingAddressName.start,"   ",destinationAddressName)
    // console.log("LLLL",startingplaceName)
    // console.log("mmm",destinationplaceName)
    setState({
      startingCords: {
        latitude: data.pickupCords.latitude,
        longitude: data.pickupCords.longitude
      },
      destinationCords: {
        latitude: data.destinationCords.latitude,
        longitude: data.destinationCords.longitude
      }
    })
    
  console.log(destinationCords.latitude,"   ",data.destinationCords.latitude,)
 sendDatainCallerRequest()
  }
    // setplaceName({
    //   startingplaceName: {
    //     startName:data.startingAddress.startName
       
    //    },
    //    destinationplaceName:
    //    {
    //      endName:data.destinationAddress.endName
    //    }
    // })

//    console.log("data=====>",data)
//  console.log(data.startingAddress.startName,"data=====>",startingplaceName.startName)
//  console.log(data.destinationAddress.endName,"data=====>", destinationplaceName.endName)
 //console.log("startingAddress",data.startingAddress.startName)
 //console.log(" destinationAddress",data.destinationAddress.endName)
  

  const sendDatainCallerRequest=()=>{
    //.log("ab jaega data ",  startingCords.latitude)
    var dataToUpload = {
      c_currlat: startingCords.latitude,
      c_currlng: startingCords.longitude,
      c_droplat: destinationCords.latitude,
      c_droplng: destinationCords.longitude,
      Caller_email: props.route.params.user,
      Caller_pass: props.route.params.pass

  };

   fetch('http://10.0.2.2:8000/api/callerrequest', {
    method: 'POST',
    mode: "cors",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToUpload),
})
    .then(response => response.text())
    .then(res => {
        console.log('Success:', res);
        // if(res=='Caller Request Added Successfully'){
        //   alert("Added Successfully")
        //navigation.goBack()
        //}
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    console.log(dataToUpload);

  }
    
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: Number(24.9089),
              longitude: 67.0602,
              latitudeDelta: 0.01,
              longitudeDelta: 0.0421
              // ...startingCords,
              //  latitudeDelta: 0.01,
              // longitudeDelta: 0.0421
            }
            }
          >
            <Marker
              coordinate={{
                ...startingCords
              }} />

            {Object.keys(destinationCords).length > 0 && (<Marker
              coordinate={{
                ...destinationCords
              }}
              image={imagePath.hospitalMarker}
            />)}
            
            {Object.keys(destinationCords).length > 0 && (<MapViewDirections
              origin={{...startingCords}}
              destination={{  ...destinationCords}}
              apikey='AIzaSyB66LLwN2cyVKzR1MyCUSKo5OUf7PLK0_c'
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={true}
             
              onReady={result =>
                 { mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100
                  }
                }),fetch
              }}
            />)}

          </MapView> 
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.fontStyle}>Where do you want to go?</Text>

          {/* <Text>k:{JSON.stringify(user)}</Text> */}
          <TouchableOpacity style={styles.Input}
            onPress={() =>
              //onPressLocation()
              props.navigation.navigate('ChooseLocation'
             ,{getCordinates:fetchValues}
              )
            }
          >
            <Text style={{ color: '#ff5b5b', alignItems: 'center', fontSize: 20 }}>Choose your Hospital Location? </Text>

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
      height: Dimensions.get('window').height
    },
    Input: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#fff',
      //padding:8,
      margin: 10,
      width: 800,
      height: 40,
      backgroundColor: '#ff5b5b',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bottomCard: {
      backgroundColor: '#ff5b5b',
      width: '100%',
      padding: 30,
      borderTopEndRadius: 24,
      borderTopStartRadius: 24

    },

    fontStyle: {
      color: '#fff',
      fontSize: 27,
      alignItems: 'center'
    },

    Input: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#777',
      padding: 8,
      marginTop: 16,
      width: 400,
      backgroundColor: '#fff',
      height: 60,
    },


    /////////////////////////////////
    fontStyleHeading: {
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
      color: '#fff', padding: 3, textDecorationLine: "underline"
    },
  });

   
      // useEffect(() => {
    //       LogBox.ignoreLogs(['Error on GMAPS route request: ZERO_RESULTS']);
    //       LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
    //       if (props.route.params != null) {
    //         setState({
    //           startingCords: {
    //             latitude: props.route.params.pickupCords.latitude,
    //             longitude: props.route.params.pickupCords.longitude
    //           },
    //           destinationCords: {
    //             latitude: props.route.params.destinationCords.latitude,
    //             longitude: props.route.params.destinationCords.longitude
    //           }
    //         })
    //         console.log("pickup", props.route.params.pickupCords)
    //         console.log("destination", props.route.params.destinationCords)
    //       }
    //   }, [])
