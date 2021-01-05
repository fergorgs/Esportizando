import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
// import * as firebase from 'firebase';
// import moment from "moment";
// import * as Facebook from 'expo-facebook';


export default class SignIn extends Component {

  state = {
    email   : '',
    password: '',
    errorMessage: '',
    currentDate: new Date(),
    isSelected:0,
  }

  //Sets the Header to be null
  //The screen does not need a header
  static navigationOptions = {
    headerShown: false
  }

  render() {
    return (

          <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            
            <Image
              resizeMode = "contain"
              style={{width: 200, height: 200, marginBottom:30}}
              source={{uri: 'https://previews.123rf.com/images/huad262/huad2621212/huad262121200005/16765900-the-letter-e-caught-on-blazing-fire.jpg'}}
            />
    
             {/*Text Input email*/}
            <View style={styles.inputContainer}>
              <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize = 'none'
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
             {/*Text Input password*/}
            <View style={styles.inputContainer}>
              <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize = 'none'
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
            
            {/*Button - Screen Recover Password */}
            <TouchableOpacity style={styles.restoreButtonContainer}>
            {/*  onPress={() => this.props.navigation.navigate('RecoverScreen')}> */}
                <Text>Forgot your password?</Text>
            </TouchableOpacity>
    
            {/*Button - Login*/}
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.props.navigation.navigate('AppScreen')}>
              <Text style={styles.loginText}>Login</Text>
              
            </TouchableOpacity>
    
            {/*Button - Screen Sign Up */}
            <TouchableOpacity style={styles.buttonContainer}>
            {/* // onPress={() => this.props.navigation.navigate('SignUpScreen')}> */}
                <Text>Register</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
    
        );
  }
  //   render() {
  //     {/*Pressed the button Sign in*/}
  //     if(this.state.isSelected===1)
  //     {
  //       return(
  //       <View style={styles.containerLoading}>
  //         <Text style={{color:'#e93766', fontSize: 20,textAlign:"center"}}>
  //           Seguir para o menu principal
  //         </Text>
  //         <TouchableHighlight style={{
  //             height:45,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             marginTop:30,
  //             marginBottom:20,
  //             width:250,
  //             borderRadius:30,
  //             backgroundColor: "#e93766",
  //         }} 
  //           onPress={()=> this.props.navigation.navigate("AppScreen")}>
  //           <Text style={styles.signUpText}>Continuar</Text>
  //         </TouchableHighlight>
  //       </View>
  //       )
  //     }  
  //   return (

  //     <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          
  //        {/*Renders logo ProjectEDU*/}
  //       <Image
  //         resizeMode = "contain"
  //         style={{width: 200, height: 200, marginBottom:30}}
  //         source={{uri: 'https://previews.123rf.com/images/huad262/huad2621212/huad262121200005/16765900-the-letter-e-caught-on-blazing-fire.jpg'}}
  //       />

  //        {/*Text Input email*/}
  //       <View style={styles.inputContainer}>
  //         <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
  //         <TextInput style={styles.inputs}
  //             placeholder="Email"
  //             keyboardType="email-address"
  //             autoCapitalize = 'none'
  //             underlineColorAndroid='transparent'
  //             onChangeText={(email) => this.setState({email})}/>
  //       </View>
        
  //        {/*Text Input password*/}
  //       <View style={styles.inputContainer}>
  //         <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
  //         <TextInput style={styles.inputs}
  //             placeholder="Password"
  //             secureTextEntry={true}
  //             autoCapitalize = 'none'
  //             underlineColorAndroid='transparent'
  //             onChangeText={(password) => this.setState({password})}/>
  //       </View>
     
  //       {/*Button - Screen Recover Password */}
  //       <TouchableOpacity style={styles.restoreButtonContainer}>
  //       {/*  onPress={() => this.props.navigation.navigate('RecoverScreen')}> */}
  //           <Text>Forgot your password?</Text>
  //       </TouchableOpacity>

  //       {/*Button - Login*/}
  //       <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
  //       onPress={this.props.navigation.navigate('AppScreen')}>
  //         <Text style={styles.loginText}>Login</Text>
          
  //       </TouchableOpacity>

  //       {/*Button - Screen Sign Up */}
  //       <TouchableOpacity style={styles.buttonContainer}>
  //       {/* // onPress={() => this.props.navigation.navigate('SignUpScreen')}> */}
  //           <Text>Register</Text>
  //       </TouchableOpacity>


  //     </KeyboardAvoidingView>

  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#686F9A',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3b5998',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 