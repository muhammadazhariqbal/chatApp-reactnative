import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import loginImage from '../../assets/login-img.png'
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import {signInUser} from '../../Config/firebase'
export default function LoginView({ navigation }) {

    // this const will return boolean value 
    const [loaded] = useFonts({
        Nunito: require('../../assets/fonts/Nunito-Bold.ttf'),
      });
      
      // getting user details on change text 
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    // registering user 
    const signingIn = () => {
        console.log(`
        user email : ${userEmail}
        user password : ${userPassword}
        `)
        signInUser(userEmail, userPassword)
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={loginImage}
                />
            </View>
            <ScrollView style={{width:'100%'}}>
            <View style={styles.detailsContainer}>
            
            <Text style={styles.heading}>Log in</Text>
                <Text style={styles.para}>Log in to continue</Text>
                <TextInput  style={styles.input} placeholder="Email" placeholderTextColor="gray" onChangeText={text => setUserEmail(text)} />
            
                <TextInput  style={styles.input} secureTextEntry={true}  placeholder="Password" placeholderTextColor="gray" onChangeText={text => setUserPassword(text)} />

                <TouchableOpacity style={styles.btn} onPress={()=>{signingIn()}}>
                    <Text style={{color:'#fff',fontSize:18, textAlign:'center'}}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}}  onPress={()=>{navigation.navigate('signupview')}} >
                    <Text style={{   color:'#35354c',fontSize:20, textAlign:'center'}}>New User?</Text>
                </TouchableOpacity>
            
            </View>
            </ScrollView>
           
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    imageContainer: {
        flex:4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: "80%",
        width: '80%',
        margin: 'auto'
    },
    detailsContainer: {
        flex: 6,
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    heading: {
        fontFamily: 'Nunito', 
        fontSize: 35, 
        color: '#35354c',
    },
    para :{
        fontFamily: 'Nunito', 
        fontSize:18,
        color: '#9c9ca9',
    },

    btn:{
        height:65,
        padding:10,
        width:'80%',
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#35354c",
        borderRadius:50,
        shadowColor: '#35354c',
        shadowOffset: {
            width: 0,
            height:10,
          },
          shadowOpacity: 0.77,
          shadowRadius: 5.677,
          elevation: 3,
        
    },
    input :{
        
        height:50,
        padding:10,
        borderBottomColor:'#35354c',
        borderBottomWidth:2,  
        fontFamily: 'Nunito', 
        width:"80%",
        margin:10
    }
    //   backgroundColor:'#35354c, #e8d9da'
});