import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressPickup =({
    placeholderText,
    fetchAddress
}) => {
    const onPressAddress=(data,details)=>{
        // this method retuns coordinates of selected location
//console.log("details====>>>>>", details)
fetchAddress()
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholderText}
                onPress={onPressAddress}
                fetchDetails={true}
                
                query={{
                  // key: 'AIzaSyB66LLwN2cyVKzR1MyCUSKo5OUf7PLK0_c',
                    language: 'en',
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
    
