import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import SignUp from './Screens/CustomBtn';
import Dashboard from './Screens/Dashboard';
import DriverSignUp from './Screens/DriverSignUp';
import EditScreen from './Screens/EditScreen';
import SettingScreen from './Screens/SettingScreen';
import ForgetPassword from './Screens/ForgetPassword';
import ProfileScreen from './Screens/ProfileScreen';
import About from './Screens/About';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FlashMessage from 'react-native-flash-message';

///////stack Unhandled promise rejection: Error: Unable to activate keep awake
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>

   <Stack.Screen name="Login" component={Login}  /> 
   <Stack.Screen name="MyDrawer" component={MyDrawer}  options={{headerShown: false}}/>   
   <Stack.Screen name="DriverSignUp" component={DriverSignUp} />
    </Stack.Navigator>
  );
}
////main 
export default function App() {
  return (
    <NavigationContainer>
     <   MyStack/>
     <FlashMessage
        position="top"
      />
    </NavigationContainer>
//<Dashboard/>
   // <MapSearch/>
//<GooglePlacesInput/>
  );
}
//
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Dashboard" component={Dashboard}/>
      <Drawer.Screen name="EditScreen" component={EditScreen}/>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Drawer.Screen name="About" component={About}/>
      <Drawer.Screen name="SettingScreen" component={SettingScreen}/>
      <Drawer.Screen name="Log Out" component={Login}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
