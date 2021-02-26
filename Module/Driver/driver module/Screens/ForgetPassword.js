import React ,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking} from 'react-native';
import 'react-native-gesture-handler';

const userInfo={username:'admin', password:'admin'}

class ForgetPassword extends Component {   
  constructor(props){    
     console.log(props)
     super(props); 
    this.state={
        username:'',
        password:''
     }
    }
      render(){

    return (
        <View style={styles.container}>
        <Text style={styles.logo}>Appulance</Text> 
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter Email" 
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            onChangeText={(username)=> this.setState({username})}
            value={this.state.username}
/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Enter New Password" 
            placeholderTextColor="#003f5c"
            onChangeText={(password)=>this.setState({password})}
            value={this.state.password}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} 
          // onPress={() => props.navigation.replace('HomeScreen')}
         // onPress={() => {loginHandle( this.state.username, this.state.password )}}
         onPress={()=> this.props.navigation.navigate('LoginScreen')} >Reset Password</Text>
        </TouchableOpacity>
        
    
      </View>
    );
     
    }
    _login = async() => {
      if(userInfo.username==this.state.username && userInfo.password== this.state.password){
       this.props.navigation.replace('HomeScreen')
      }
      
      else{
        alert('Incorrect username and password.')
      }
    }
  }
 /* const loginHandle = (username, password) => {

    const foundUser = User.filter( item => {
        return username == item.username && password == item.password;
    } );

    if ( username.length == 0 || password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
    }

    if ( foundUser.length == 0 ) {
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'}
        ]);
        return;
    }
    signIn(foundUser);
}*/
export default ForgetPassword;
/*const authContext = React.useMemo(() => ({
  signIn: async(foundUser) => {
    // setUserToken('fgkj');
    // setIsLoading(false);
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;
    
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  }
}), []);

*/
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ff5b5b',
          alignItems: 'center',
          justifyContent: 'center',
        },
        logo:{
          fontWeight:"bold",
          fontSize:50,
          color:"white",
          marginBottom:60
        },
        inputView:{
          width:"80%",
          backgroundColor:"#ffffff",
          borderRadius:35,
          height:50,
          marginBottom:20,
          justifyContent:"center",
          padding:20
        },
        inputText:{
          height:50,
          fontSize:15
        },
        loginBtn:{
          width:"80%",
          backgroundColor:"#b40505",
          borderRadius:25,
          height:50,
          alignItems:"center",
          justifyContent:"center",
          marginTop:30,
          marginBottom:20
        },
        loginText:{
          color:"white",
          fontSize:20,
          fontWeight:"bold"
        }
      });
      