import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Login(props) {

  const [userName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true)
  // const [isLoading, setLoading] = useState(true)


  var LoginCred = async () => {
    // if(){}
    if (userName == "" || Password == "") {
      alert("All fields are required")
    }
    else {
      var dataToUpload = {
        email: userName,
        password: Password
      };
      fetch('http://10.0.2.2:8000/api/driverlogin', {
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
          console.log(res[5]);
          if (res[5] >= 1) {
            //here asynnc storage
            const storeData = async (userName) => {
              try {
                await AsyncStorage.setItem('token', Json.stringify(userName))
                console.log(token)

              } catch (e) {
                console.log("error", e)
              }
            }
            ////
            alert("Login Successful")
            props.navigation.navigate("MyDrawer")

          } else {
            alert("Invalid Credentials")
          }

        })
        .catch((error) => {
          console.error('Error:', error);
          alert("OOPS Something went wrong")
        });
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.fontStyleHeading} >Appulance</Text>
      <View style={styles.spaceLogo} />


      <Text style={styles.fontStyle} >Email</Text>

      <TextInput
        style={styles.Input}
        value={userName}
        onChangeText={(text) => setUserName(text)}


      />

      <Text style={styles.fontStyle}  >Password</Text>
      <TextInput
        style={styles.Input}
        value={Password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />


      <Button title="LOGIN"
        style={styles.button} color='#b40505'
        onPress={() => {
          alert("Login Successful")
          props.navigation.navigate("MyDrawer")
          //  LoginCred()
        }}
      />
      <TouchableOpacity >

        <Text style={styles.TextLink}>Forgot Password? </Text>

      </TouchableOpacity>

      <View style={styles.space} />

      <TouchableOpacity >

        <Text style={styles.TextLink}>Don't have an account, Sign Up </Text>

      </TouchableOpacity>
      <View style={styles.space} />
      <Button
        style={styles.button} title='SignUp' color='#b40505' onPress={() => props.navigation.navigate("DriverSignUp")} />





    </View>

  );
};
export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5b5b',
    alignItems: 'center',
    justifyContent: 'center',

  },
  fontStyleHeading: {
    color: '#fff',
    fontSize: 35

  },
  fontStyle: {
    color: '#fff',
    fontSize: 25
  },

  Input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 270,
    backgroundColor: '#fff',


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
    height: 35,
  },
  TextLink: {
    color: '#fff', padding: 3, textDecorationLine: "underline"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#b40505",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20
  },
});

