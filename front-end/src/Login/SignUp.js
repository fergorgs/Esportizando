import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import moment from "moment";
import { ImagePicker,Notifications } from 'expo';
import DatePicker from 'react-native-datepicker'
import * as Permissions from 'expo-permissions'

import * as firebase from 'firebase';
//import { ScrollView } from 'react-native-gesture-handler';

export default class SignUp extends Component {

    state = {
      fullName: "",
      email   : "",
      password: "",
      currentDate: new Date(),
      image: "https://firebasestorage.googleapis.com/v0/b/projectedu-38e92.appspot.com/o/default.png?alt=media&token=13712cb1-7300-400f-97fe-312ec012f35f",
      birthDate:null,
      isSelected:0
    }

    //Configuring the Header of the Screen
    static navigationOptions = {
      title: 'Back',
      headerStyle: {
        backgroundColor: '#FF800',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: "left",
      },
    };

  //Function responsible for creating the user and registering information on the database
  onSignUpPress = async () =>{
    const{email,password,fullName,currentDate,image,birthDate} = this.state;

    this.setState({ isSelected:1})
    try {
      await firebase.auth()
        //creates the user with email and password
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{

        //update user information on firebase - Name and Email
        firebase.auth().currentUser.updateProfile({
          displayName: fullName,
          email:email
        })
        .catch((error)=>{
          this.setState({ isSelected:0})
          console.log('error ' , error)
          Alert.alert(error.message)
        })
        console.log("Account created");

        this.registerForPushNotificationsAsync()
        
        //Registering User info
        let userId = firebase.auth().currentUser.uid
        firebase.database().ref("/users/" + userId).set({
          name:fullName,
          progress:0,
          points:0,
          image:image,
          birthDate:birthDate,
          created_at:moment(currentDate).format('MMMM Do YYYY, h:mm:ss a')
        })
        //Registering the Leaderboards Table
        firebase.database().ref("/leaderbords/" + userId).set({
          name:fullName,
          points:0,
          id:firebase.auth().currentUser.uid
        })
        //Creates table for Module 3 
        //Registering the Module Project Cost Management
        firebase.database().ref("/module3/Project Cost Management/" + userId + "/Introduction").set({
          id:1,
          displayTitle:"Introduction",
          checkmark:false,
          INT_IntroVideo: {
            id:1,
            displayTitle:"Introduction Video",
            checkmark:false,
            idName:"INT_IntroVideo"},
          INT_ContentOverall: {
            id:2,
            displayTitle:"Content Overall",
            checkmark:false,
            idName:"INT_ContentOverall"},
          INT_Activities: {
            id:3,
            displayTitle:"Activities",
            checkmark:false,
            idName:"INT_Activities"}
        })
        firebase.database().ref("/module3/Project Cost Management/" + userId + "/Estimating").set({
          id:2,
          displayTitle:"Estimating",
          checkmark:false,
          EST_TypesOfCosts: {
            id:1,
            displayTitle:"Types of Costs",
            checkmark:false,
            idName:"EST_TypesOfCosts"},
          EST_Inputs: {
            id:2,
            displayTitle:"Inputs",
            checkmark:false,
            idName:"EST_Inputs"},
          EST_ToolsAndTechniques: {
            id:3,
            displayTitle:"Tools and Techniques",
            checkmark:false,
            idName:"EST_ToolsAndTechniques"},
          EST_Outputs: {
            id:4,
            displayTitle:"Outputs",
            checkmark:false,
            idName:"EST_Outputs"},
          EST_Activities: {
            id:5,
            displayTitle:"Activities",
            checkmark:false,
            idName:"EST_Activities"}
        })
        firebase.database().ref("/module3/Project Cost Management/" + userId + "/Budgeting").set({
          id:3,
          displayTitle:"Budgeting",
          checkmark:false,
          BUD_Introduction: {
            id:1,
            displayTitle:"Introduction",
            checkmark:false,
            idName:"BUD_Introduction"},
          BUD_Inputs: {
            id:2,
            displayTitle:"Inputs",
            checkmark:false,
            idName:"BUD_Inputs"},
          BUD_ToolsAndTechniques: {
            id:3,
            displayTitle:"Tool and Techniques",
            checkmark:false,
            idName:"BUD_ToolsAndTechniques"},
          BUD_Outputs: {
            id:4,
            displayTitle:"Outputs",
            checkmark:false,
            idName:"BUD_Outputs"},
          BUD_Activitiess: {
            id:5,
            displayTitle:"Activities",
            checkmark:false,
            idName:"BUD_Activities"}
        })
        firebase.database().ref("/module3/Project Cost Management/" + userId + "/Controlling").set({
          id:4,
          displayTitle:"Controlling",
          checkmark:false,
          CON_Introduction: {
            id:1,
            displayTitle:"Introduction",
            checkmark:false,
            idName:"CON_Introduction"},
          CON_Inputs: {
            id:2,
            displayTitle:"Inputs",
            checkmark:false,
            idName:"CON_Inputs"},
          CON_ToolsAndTechniques: {
            id:3,
            displayTitle:"Tool and Techniques",
            checkmark:false,
            idName:"CON_ToolsAndTechniques"},
          CON_Outputs: {
            id:4,
            displayTitle:"Outputs",
            checkmark:false,
            idName:"CON_Outputs"},
          CON_Activities: {
            id:5,
            displayTitle:"Activities",
            checkmark:false,
            idName:"CON_Activities"}
        })
        //Registering the Achievements for each User
        firebase.database().ref("/achievements/" + userId).set({
          Respect:"Unavailable",
          RockstarRookie:"Unavailable",
          LimelightAward:"Unavailable",
          SpotlightAward:"Unavailable",
          HeroAward:"Unavailable",
          ShiningStarAward:"Unavailable",
          SuperstarAward:"Unavailable",
          PresidentsAward:"Unavailable",
          HonorClub:"Unavailable",
          DiamondClub:"Unavailable",
          BrightBeginning:"Unavailable"
        })

        //Creates table Statistics on firebase
        firebase.database().ref("/statistics/" + userId+"/"+moment(new Date()).format("YYYY-MM-DD")+"/").set({
          date:moment(new Date()).format("MM-DD"),
          points:0
        })

        this.setState({ isSelected:2})
      })      
    }
    catch (error) {
      this.setState({ isSelected:0})
      console.log(error.toString())
      Alert.alert(error.message)
    }
  }
  //Function that detects if the inputs aren't null
  CheckTextInput = () => {
    if (this.state.fullName != "") 
    {
        if(this.state.birthDate!=null)
        {
          this.onSignUpPress()
        }
        else
        {
          Alert.alert('Please insert a valid birth date');
        }
    }
    else 
    {
        Alert.alert('Please insert a valid name');
    }
  };
  //Function that selects the profile image
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  //Function that register each user to be able to receive Notifications
  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    try {
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      let userId = firebase.auth().currentUser.uid
      firebase.database().ref("/users/" + userId).update({
        pushtoken:token,
        notification:true
      })

      //Passing random messages as notification
      /*let messages = [
        "Understand the culture",
        "Be accessible to learn more",
        "Communicate to identify changes quickly",
        "Keep detailed project notes to share",
        "Discuss challenges, roadblocks, & risks",
        "Listen to opinions from everyone, even if you reject them later",
        "Respect every opinion as if it were your own",
        "Challenge ideas to make them better",
        "Build rapport and trust with clients",
        "Don't isolate your team with overconfidence",
        "Learn from every experience",
        "Make sure you motivate and lead your team",
        "Manage your people, not just your documentation",
        "Build a bridge for two-way trust",
        "Stay flexible to take on every challenge",
        "Delegate wisely and lead by example",
        "Train your people to be future leaders",
        "Think outside the box",
        "Protect your team",
        "And don't forget to proactively celebrate success!"
      ]
      let messageval = Math.floor(Math.random() * 21)
      console.log(messageval)*/

      const localNotification = {
        title: "Daily Notification'",
        body: "Let's Study Project Management",
        sound:true
      }
      const schedulingOptions = {
        time: (new Date()).getTime() + 5000,
        repeat:"day"
      }
  
      console.log('Scheduling delayed notification:', { localNotification, schedulingOptions })
  
      //Schedule Notification for the User 
      Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
        .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions.time).format()}`))
        .catch(err => console.error(err))


    } catch (error) {
      console.log(error);
    }
  };

  render() {

    //Solving sync problems
    let { image } = this.state
    //Waits the user to be created
    if(this.state.isSelected==1)
    {
      return(
      <View style={styles.containerLoading}>
        <Text style={{color:'#e93766', fontSize: 40}}>Criando Usuário</Text>
        <ActivityIndicator color='#e93766' size="large" />
      </View>
      )
    }
    //Screen to continue to the main menu
    if(this.state.isSelected==2)
    {
      return(
      <View style={styles.containerLoading}>
        <Text style={{color:'#e93766', fontSize: 20,textAlign:"center"}}>
          Seguir para o menu principal
        </Text>
        <TouchableHighlight style={{
            height:45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:30,
            marginBottom:20,
            width:250,
            borderRadius:30,
            backgroundColor: "#e93766",
        }} 
          onPress={()=> this.props.navigation.navigate("AppScreen")}>
          <Text style={styles.signUpText}>Continuar</Text>
        </TouchableHighlight>
      </View>
      )
    }

    //Renders the Sign Up Screen
    return (
      <ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        {/*Profile image container*/}
        <View style = {styles.inputContainerPhoto}>
           {/*Touchable responsible for selecting and renderng the profile image*/}
          <TouchableWithoutFeedback
          onPress={this._pickImage}>
            <Image
              source = {{uri:image}}
              style={{ width: 100, height: 100 }}
              resizeMode = "contain"
            />
          </TouchableWithoutFeedback>
          <Text style = {{marginTop:10}}>
            Set your profile picture
          </Text>
        </View>

        {/*Text Input Name*/}
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType='name-phone-pad'
              underlineColorAndroid='transparent'
              textContentType = 'name'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        {/*Text Birthdate*/}
        <View style = {styles.inputContainer}>
          <DatePicker
            style={{width: 200}}
            date = {this.state.birthDate}
            mode="date"
            placeholder="Birth Date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate={moment(new Date()).format("YYYY-MM-DD")}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 10,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 60
              }
            }}
            onDateChange={(date) => {this.setState({birthDate: date})}}
          />
      </View>

        {/*Text Input email*/}
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              textContentType = "emailAddress"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              autoCapitalize = 'none'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        {/*Text Input password*/}
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              textContentType = 'password'
              keyboardType = 'default'
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              autoCapitalize = 'none'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        {/*Button Sign Up*/}
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
        onPress={this.CheckTextInput}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
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
      marginBottom:0,
      marginTop: 30,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#3b5998",
  },
  signUpText: {
    color: 'white',
  },
  inputContainerPhoto: {
    marginBottom:0,
    marginTop: 30,
    flexDirection: 'column',
    alignItems:'center'
},
  containerLoading: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});
 