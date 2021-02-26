import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, LogBox, FlatList } from 'react-native';
import AddressPickup from './AddressPickup';
import { ScrollView } from 'react-native-gesture-handler';
import { showError, showSuccess } from '../Screens/images/helper/helperFunction'

function ChooseLocation({ navigation, route }, props) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  }, [])
  // const checkLocation= ()=>{

  //   navigation.goBack()
  //   alert("finding the ambulance")
  //   }
  //
  const [state, setState] = useState({
    pickupCords: {
      // latitude: 24.9089,
      // longitude:67.0602,
    },
    destinationCords: {
      // latitude: 24.8920,
      // longitude: 67.0747
    }
  })

  const { pickupCords, destinationCords } = state
  ////////////////////////////////////////////
  const [addressState, setAddressState] = useState({
    startingAddress: {
     startName:'hello'
    },
    destinationAddress:
    {
      endName:'polo'
    }
  })
  const {startingAddress, destinationAddress } = addressState

                    //function to checck location filled out or not
  const checkValid = () => {
    if (Object.keys(pickupCords).length === 0) {
      showError('Please enter your pickup location')
      return false
    }
    if (Object.keys(destinationCords).length === 0) {
      showError('Please enter your destination location')
      return false
    }
    return true
  }
                     /////// func to send cordinates and name to Dashboard
  const onDone = () => {
    const isValid = checkValid()
    //console.log("isvalid", isValid)
    if (isValid) {
      route.params.getCordinates({
        pickupCords,
        destinationCords,
        startingAddress,
        destinationAddress
      })
      showSuccess("Finding your ambulance")
      navigation.navigate("Dashboard")
    }
  }


                    /////////////////////// set pickup location cords
  const fetchAddressCords = (lat, lng) => {
    console.log('fetchAddressCords')
    console.log('latitude', lat)
    console.log('longitudee', lng)
//    console.log("pickup name", formatted_address)
    setState({
      ...state, pickupCords: {
        latitude: lat,
        longitude: lng
      }
    })
    // setAddressState({
    //   ...state,   startingAddress: {
    //     startName: formatted_address
    //    },
    // })
  }
                    ////////////// set destination cords
  const fetchDestinationCords = (lat, lng) => {
    // console.log('FETCHDestinationCords')
    // console.log('latitude', lat)
    // console.log('longitudee', lng)
    // console.log("destadd name", destadd_name)
    setState({
      ...state, destinationCords: {
        latitude: lat,
        longitude: lng
      }
    })
    // setAddressState({
    //   ...state,  destinationAddress: {
    //   endName:add_name
    //   }
    // })
  }
  // //console.log("KHALIpickupCords", props)
  // console.log("dest addresss before set",destaddressName)
  // //setDestAddressname('islama')
 
  return (

    <View style={styles.container}>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1, padding: 24, marginHorizontal: 24, marginTop: 200 }}>


        <AddressPickup
          placeholderText="Enter Pickup Location"
          fetchAddress={fetchAddressCords}
        />
        <View style={styles.space}></View>

        <AddressPickup
          placeholderText="Enter Hospital Name"
          fetchAddress={fetchDestinationCords}
        />

        <Button title="Search"
          style={styles.button} color='#b40505'
          onPress={() => {
            onDone()
          }}
        />

      </ScrollView>


    </View>
  );
}


export default ChooseLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5b5b',

    //  alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    marginBottom: 20,
    padding: 30
  },
  fontStyleHeading: {
    color: '#fff',
    fontSize: 28

  },
  fontStyle: {
    color: '#fff',
    fontSize: 12
  },

  Input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    backgroundColor: '#fff',
    height: 30
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
    height: 15,
  },
  TextLink: {
    color: '#fff', padding: 3, textDecorationLine: "underline"
  },
});

