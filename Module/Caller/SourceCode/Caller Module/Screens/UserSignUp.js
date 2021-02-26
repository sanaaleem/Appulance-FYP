import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput , Button} from 'react-native';

function UserSignUp({ navigation, route }) {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, SetConfirmPassword] = useState('');

  function SignUpCred(){
    var dataToUpload = {
      email: Email,
      Name: Name,
      phoneNo: PhoneNo,
      password: Password,
   };

   fetch('http://10.0.2.2:8000/api/userSignUp', {
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
        if(res=='Added Successfully'){
          alert("Added Successfully")
        navigation.goBack()
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    console.log(dataToUpload);
}

    return (
      <View style={styles.container}>
          <Text  style={styles.fontStyleHeading} >Appulance</Text>
          <View style={styles.spaceLogo} />
    
          <Text  style={styles.fontStyle} > Email</Text>
          <TextInput style={styles.Input} 
          value={Email}
          onChangeText={(text) => setEmail(text)}/>
    
          <Text  style={styles.fontStyle} >Name</Text>
          <TextInput style={styles.Input} 
          value={Name}
          onChangeText={(text) => setName(text)}/>

          <Text  style={styles.fontStyle} >Contact#</Text>
          <TextInput style={styles.Input}
          value={PhoneNo}
          onChangeText={(text) => setPhoneNo(text)}/>
    
          <Text  style={styles.fontStyle} >Password</Text>
          <TextInput style={styles.Input} 
          secureTextEntry={true}
          value={Password}
          onChangeText={(text) => setPassword(text)}/>

          <Text  style={styles.fontStyle} >Confirm Password</Text>
          <TextInput style={styles.Input} 
          secureTextEntry={true}
          value={ConfirmPassword}
          onChangeText={(text) => SetConfirmPassword(text)}/>

          <Button style={styles.button}
           title='Create My Account' 
           color='#b40505' 
           onPress={() => {
            // props.navigation.navigate("Dashboard"),
             SignUpCred()
          }}/>     
            
         
        </View>
      );
};
export default UserSignUp;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff5b5b',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    fontStyleHeading:{
      color: '#fff',
      fontSize: 30 
  
    },
    fontStyle:{
        color: '#fff',
        fontSize: 10 },
  
    Input:{
      borderWidth:1,
      borderRadius:  25,
      borderColor:'#777',
      padding:8,
      margin:10,
      width:200,
      backgroundColor:'#fff'
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
  });
  
  