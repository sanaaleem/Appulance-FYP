import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple,} from 'react-native-paper';
import 'react-native-gesture-handler';

function ProfileScreen(props){
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Star</Title>
            <Caption style={styles.caption}>star</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
         
          <Text style={{color:"#777777", marginLeft: 20}}>Star </Text>
        </View>
        <View style={styles.row}>
          <Text style={{color:"#777777", marginLeft: 20}}>03215556667 </Text>
        </View>
        <View style={styles.row}>
          <Text style={{color:"#777777", marginLeft: 20}}> Star@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>RS.0</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>0</Title>
            <Caption>Booking</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
      <TouchableRipple >
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText} onPress={() => props.navigation.navigate('EditScreen')}>Edit Profile</Text>
          </View>
        </TouchableRipple> 
        <TouchableRipple onPress={() =>{} }>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => this.props.navigation.replace('SettingScreen') }>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});