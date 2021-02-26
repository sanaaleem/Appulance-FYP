import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

function DriverSignUp({ navigation, route }) {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, SetConfirmPassword] = useState('');
  const [CNIC, setCNIC] = useState('');
  // const [V_ID, setV_ID] = useState('');
  // const [L_ID, setL_ID] = useState('');
  const [Status, setStatus] = useState('');

  const [isLoading, setLoading] = useState(true)

  function SignUpCred() {

    ///

    if (Password != ConfirmPassword) {
      alert("Password and conirm passwords are not same")
    }
    else if (Email == "" || Name == "" || PhoneNo == "" || Password == "" || CNIC == "" || Status == "") {
      alert("All fields are required")
    }
    else {
      var dataToUpload = {
        name: Name,
        email: Email,
        phoneNo: PhoneNo,
        CNIC: CNIC,
        V_ID: "1",
        L_ID: "1",
        password: Password,
        status: "1",
      };

      fetch('http://10.0.2.2:8000/api/driversignup', {
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
          console.log(dataToUpload)
          if (res == 'Added Successfully') {
            alert("Added Successfully")
            navigation.goBack()
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      console.log(dataToUpload);
    }
  }

    return (
      <View style={styles.container}>
      <Text  style={styles.fontStyleHeading} >Appulance</Text>
      <View style={styles.spaceLogo} />

      <Text  style={styles.fontStyle} >Driver's Name</Text>
      <TextInput style={styles.Input}
      value={Name}
      onChangeText={(text) => setName(text)}/>

      <Text  style={styles.fontStyle} >Driver's Email</Text>
      <TextInput style={styles.Input} 
      value={Email}
      onChangeText={(text) => setEmail(text)}/>

      
      <Text  style={styles.fontStyle} >Driver's Contact#</Text>
      <TextInput style={styles.Input} 
      value={PhoneNo}
      onChangeText={(text) => setPhoneNo(text)}/>
      

      <Text  style={styles.fontStyle} >Driver's CNIC#</Text>
      <TextInput style={styles.Input} 
      value={CNIC}
      onChangeText={(text) => setCNIC(text)}/>
{/* 
      <Text  style={styles.fontStyle} >Driver's V_ID#</Text>
      <TextInput style={styles.Input} 
      value={V_ID}
      onChangeText={(text) => setV_ID(text)}/>

      <Text  style={styles.fontStyle} >Driver's L_ID#</Text>
      <TextInput style={styles.Input} 
      value={L_ID}
      onChangeText={(text) => setL_ID(text)}/> */}

      <Text  style={styles.fontStyle} >Password</Text>
      <TextInput style={styles.Input}
      value={Password}
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}/>

<Text  style={styles.fontStyle} >Confirm Password</Text>
      <TextInput style={styles.Input} 
      value={ConfirmPassword}
      secureTextEntry={true}
      onChangeText={(text) => SetConfirmPassword(text)}/>

<Text  style={styles.fontStyle} >Status #</Text>
      <TextInput style={styles.Input}
      value={Status}
      onChangeText={(text) => setStatus(text)}/>


   
   <Button title="create"
      onPress={() => {
        // props.navigation.navigate("Dashboard"),
          //LoginCred(),
          SignUpCred()
        
      }}
    />

{/* <Button
      style={styles.button} title='create' color='#b40505' onPress={() => props.navigation.navigate("Dashboard")} /> */}
      {/* <Button style={styles.button} 
      title='Create My Account'
      color='#b40505' 
      // onPress={()=> { alii()
      //  // props.navigation.navigate("Dashboard")
      // }}
      onPress={() => {
        props.navigation.navigate("Dashboard"),
          //LoginCred(),
         // SignUpCred()
         alii()
      }}
      />      */}
        
     
    </View>
    );
  }


  export default DriverSignUp;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff5b5b',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    fontStyleHeading:{
      color: '#fff',
      fontSize: 28 
  
    },
    fontStyle:{
        color: '#fff',
        fontSize: 12 },
  
    Input:{
      borderWidth:1,
      borderRadius:  25,
      borderColor:'#777',
      padding:8,
      margin:10,
      width:300,
      backgroundColor:'#fff',
      height:30
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
    color:'#fff' ,padding:3,textDecorationLine:"underline"
  },
  });
    
