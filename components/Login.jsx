import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ImageBackground, Image, TouchableHighlight, ImageComponent, TextInput } from 'react-native';

const Login = (props) =>{
    return (
        <View style={styles.main}>
            <StatusBar backgroundColor='black' barStyle='default' hidden={true} />
            <ImageBackground source={require('../images/login_bg.jpg')} resizeMode='cover' style={styles.welcomeBg} >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.heading}>Glad to </Text>
                        <Text style={styles.heading}>meet you again</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput placeholder='Your name' style={styles.textInput} placeholderTextColor="grey"></TextInput>
                        <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor="grey" secureTextEntry={true}></TextInput>
                    </View>
                    <View style={{padding:20}}>
                        <Text style={{color: '#fff', textAlign: 'right', fontSize:17, marginRight:20}}>Forgot Password</Text>
                    </View>
                    <TouchableHighlight style={styles.btns}>
                        <View style={[styles.button, styles.loginBtn]}>
                            <Text style={styles.btnText}>Login Now</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Or</Text>
                    <TouchableHighlight style={styles.btns}>
                        <View style={[styles.button, styles.googleBtn]}>
                            <View style={styles.btnIconGBg}>
                                <Image style={styles.googleLogo} source={require('../images/icons/Google.png')} />
                            </View>
                            <Text style={styles.btnGText}>Login with Google</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.signUpText}>
                        <Text style={styles.lasttxt}>Don't have an account?</Text> 
                        <Text style={styles.signupTxt} onPress={() => props.navigation.navigate('Signup')}>SignUp</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 25,
        paddingBottom: 50
    },
    welcomeBg: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: '#000',
        justifyContent: 'center',
        color: '#fff',
        height: '85%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    row: {
        padding: 25
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'serif'
    },
    textInput: {
        color: '#fff',
        backgroundColor: '#333333',
        marginTop: 15,
        padding: 20,
        borderRadius: 20,
        fontSize: 20
    },
    btns: {
        paddingRight: 20,
        paddingLeft: 20
    },
    button: {
        backgroundColor: '#fff',
        color: '#fff',
        fontSize: 18,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginBtn: {
        backgroundColor: '#a26ffc',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
    btnGText:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        flex: 1,
        textAlign: 'center'
    },
    googleBtn: {
        padding:20,
        fontSize: 24,
        alignItems: 'center',
    },
    signUpText:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lasttxt:{
        color: '#7d7d7d',
        fontSize: 18,
    },
    signupTxt:{
        color: '#a26ffc',
        fontSize: 18,
        marginLeft:10
    }

});

export default Login;
