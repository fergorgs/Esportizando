import React, { useState } from 'react';
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
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../auth/fire.js";

import Icon from "react-native-vector-icons/Ionicons";

import User from "../api/controllers/User";
import { config } from "../api";
// import * as firebase from 'firebase';
// import moment from "moment";
// import * as Facebook from 'expo-facebook';


const mainColor = '#446a9c';
const textColor = '#ffffff';

function Register({ navigation }) { 
  //Sets the Header to be null
  //The screen does not need a header
  //static navigationOptions = {
  //  headerShown: false
  //}

    const dispatch = useDispatch();

    //const { navigation } = props;
    const [ token, setToken ] = useState();
    const [ error, setError ] = useState();
    const { control, handleSubmit, getValues, errors } = useForm();
    
    const onSubmit = async (data) => {
        const { email, password } = data;

        auth.createUserWithEmailAndPassword(email, password)
            .then(async (result) => {
                setError("");
                const token = await result.user?.getIdToken();
                setToken(token);
                
                config(token);

                const _ = await User.create();
                
                dispatch({
                    type: "TEST_UPDATE",
                    payload: false
                });

                dispatch({
                    type: "SIGN_IN",
                    payload: token
                });


                //navigation.navigate('AppScreen');
            })
            .catch((e) => setError(e.message));

    }

    return (

        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>

            <Image
                resizeMode = "contain"
                style={{width: 200, height: 200, marginBottom:30}}
                source={{uri: 'https://previews.123rf.com/images/huad262/huad2621212/huad262121200005/16765900-the-letter-e-caught-on-blazing-fire.jpg'}}
            />
            { Boolean(error) && <Text>{ error }</Text> }
            { Boolean(token) && <Text>{ token }</Text> }
            
             {/*Text Input email*/}
            <View style={styles.inputContainer}>
                { /*<Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>*/}
                <Icon 
                    style={{
                        marginLeft: 15
                    }}
                    name='mail' 
                    size={20} 
                    color='#3e5f8e'
                />
                <Controller
                    control={ control }
                    name="email"
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, onBlur, value }) => 
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize = 'none'
                            underlineColorAndroid='transparent'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            //onChangeText={(email) => this.setState({email})}
                        />
                    }
                />
                { errors.email && <Text>Required field.</Text> }
            </View>
            
             {/*Text Input password*/}
            <View style={styles.inputContainer}>
                {/*<Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>*/}
                <Icon 
                    style={{
                        marginLeft: 15
                    }}
                    name='lock-closed' 
                    size={20} 
                    color='#3e5f8e'
                />
                <Controller
                    control={ control }
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ onChange, onBlur, value }) => 
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            autoCapitalize = 'none'
                            underlineColorAndroid='transparent'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            //onChangeText={(password) => this.setState({password})}
                        />
                    }
                />
                { errors.password && <Text>Required field.</Text> }
            </View>
            
            {/*Text Input confirm password*/}
            <View style={styles.inputContainer}>
                { /*<Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>*/}
                <Icon 
                    style={{
                        marginLeft: 15
                    }}
                    name='lock-closed' 
                    size={20} 
                    color='#3e5f8e'
                />
                <Controller
                    control={ control }
                    name="confirmPassword"
                    rules={{ 
                        required: true,
                        validate: value => 
                            value === getValues('password') || 
                                'Passwords don\'t match'
                    }}
                    defaultValue=""
                    render={({ onChange, onBlur, value }) => 
                        <TextInput style={styles.inputs}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            autoCapitalize = 'none'
                            underlineColorAndroid='transparent'
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    }
                />
                { errors.confirmPassword && <Text>Confirm your Password.</Text> }
            </View>

            {/*Button - Register*/}
            <TouchableOpacity 
                style={[styles.buttonContainer, styles.registerButton]}
                onPress={ handleSubmit(onSubmit) }>
                <Text style={styles.loginText}>Register</Text>
              
            </TouchableOpacity>
            
            {/*Button - Screen Login*/}
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.loginText}>Fazer Login</Text>
            </TouchableOpacity>
        
        </KeyboardAvoidingView>
    );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4DEEC',
  },
  inputContainer: {
      //borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      elevation: 2,
      //borderBottomWidth: 1,
      //width:250,
      //height:45,
      marginHorizontal: 30,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      marginRight: 16,
      //borderBottomColor: '#FFFFFF',

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
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
        //width:250,
    marginHorizontal: 30,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#3e5f8e',
  },
  registerButton: {
    backgroundColor: '#569F61',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  loginText: {
    color: 'white',
    flex: 1,
    textAlign: 'center'
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
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#686F9A',
//  },
//  inputContainer: {
//      borderBottomColor: '#F5FCFF',
//      backgroundColor: '#FFFFFF',
//      borderRadius:30,
//      borderBottomWidth: 1,
//      width:250,
//      height:45,
//      marginBottom:15,
//      flexDirection: 'row',
//      alignItems:'center'
//  },
//  inputs:{
//      height:45,
//      marginLeft:16,
//      borderBottomColor: '#FFFFFF',
//      flex:1,
//  },
//  icon:{
//    width:30,
//    height:30,
//  },
//  inputIcon:{
//    marginLeft:15,
//    justifyContent: 'center'
//  },
//  buttonContainer: {
//    height:45,
//    flexDirection: 'row',
//    justifyContent: 'center',
//    alignItems: 'center',
//    marginBottom:20,
//    width:250,
//    borderRadius:30,
//  },
//  registerButton: {
//    backgroundColor: '#3b5998',
//  },
//  fabookButton: {
//    backgroundColor: "#3b5998",
//  },
//  loginText: {
//    color: 'white',
//  },
//  restoreButtonContainer:{
//    width:250,
//    marginBottom:15,
//    alignItems: 'flex-end'
//  },
//  socialButtonContent:{
//    flexDirection: 'row',
//    justifyContent: 'center',
//    alignItems: 'center', 
//  },
//  socialIcon:{
//    color: "#FFFFFF",
//    marginRight:5
//  },
//  containerLoading: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});
// 
