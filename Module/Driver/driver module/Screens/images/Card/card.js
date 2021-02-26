
import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,TextInput , Button} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            { props.children}
        
        </View>
      </View>
    
);
      
    
};
export default Card;
const styles = StyleSheet.create({
    card: {
     borderRadius:4,
     elevation: 10,
      backgroundColor: '#fff',
        width:200,
        height:150,
      shadowOffset: {width: 5 , height: 5},
  shadowColor:'#333',
  shadowOpacity : 0.3,
  shadowRadius: 5,
  marginHorizontal: 4,
  marginVertical: 6,
      
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
    },
   
    
  });
  

