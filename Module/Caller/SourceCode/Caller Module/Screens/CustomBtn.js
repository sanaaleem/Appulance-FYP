
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
// import { Card, Title, Paragraph } from 'react-native-paper'


const CustomBtn = ({
  onPress=()=>{},
   btnStyle ={},
   btnText
}

) => {{}
  return (
    
      <TouchableOpacity
      onPress={onPress}
      style={{...styles.btnStyle,...btnStyle}}
      >
          <Text>{btnText}</Text>
      </TouchableOpacity>

);    
    
};
export default CustomBtn;
const styles = StyleSheet.create({
    btnStyle:{
          height:48,
          justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:16,
        borderWidth:1
    },
    fontStyle:{
        color: '#ff5b5b',
        fontSize: 35 
    
      },
      font:{
        color: '#ff5b5b',
        fontSize: 30,
        textShadowColor: '#333'    
      },
    
    
  });