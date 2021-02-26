import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressPickup =({
    placeholderText,
    fetchAddress
}) => {
    const onPressAddress=(data,details)=>{
        // this method retuns coordinates of selected location
const lat=details.geometry.location.lat
const lng=details.geometry.location.lng
// const add_name=details.name
// const formattedname=details.formatted_address
//console.log(details)
fetchAddress(lat,lng)
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                onPress={onPressAddress}
                //getAddressText
               
                fetchDetails={true}
                
                query={{
            key: 'AIzaSyB66LLwN2cyVKzR1MyCUSKo5OUf7PLK0_c',
                    language: 'en',
                    components:'country:pk'
                }}
            />
        </View>
    );

};


  export default AddressPickup;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff5b5b',
      // alignItems: 'center',
      // justifyContent: 'center',
      
    },
   
  });
    
