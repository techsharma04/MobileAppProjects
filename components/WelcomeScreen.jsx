import React, { useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View, Button, StatusBar, ImageBackground, Image, TouchableHighlight, ImageComponent } from 'react-native';

const WelcomeScreen = (props) => {

    return (
        <View style={styles.main}>
            <StatusBar backgroundColor='black' barStyle='default' hidden={true} />
            <ImageBackground source={require('../images/welcome_bg.png')} resizeMode='cover' style={styles.welcomeBg} >
                <View style={styles.welcomeLogoText}>
                    <Image style={styles.tinyLogo} source={require('../images/logo_trans.png')} />
                </View>
                <View>
                    <TouchableHighlight onPress={() => props.navigation.navigate('Login')}>
                        <View style={[styles.button, styles.emailBtn]}>
                            <View style={styles.btnIconEBg}>
                                <Image style={styles.emailLogo} source={require('../images/icons/Email.png')} />
                            </View>
                            <Text style={[styles.btnText, styles.txtColor]}>Continue with email</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight> 
                        <View style={[styles.button, styles.googleBtn]}>
                            <View style={styles.btnIconGBg}>
                                <Image style={styles.googleLogo} source={require('../images/icons/Google.png')} />
                            </View>
                            <Text style={styles.btnText}>Continue with Google</Text>
                        </View>
                    </TouchableHighlight>
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
        justifyContent: 'space-between',
    },
    welcomeLogoText: {
        height: 500,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tinyLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,

    },
    logoText: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'monospace'
    },
    button: {
        backgroundColor: '#fff',
        color: '#fff',
        fontSize: 18,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnIconEBg: {
        borderRadius: 25,
        backgroundColor: '#ba96fa',
        padding: 12
    },
    
    btnIconGBg: {
        borderRadius: 25,
        backgroundColor: '#f2f2f2',
        padding: 12
    },
    emailBtn: {
        backgroundColor: '#a26ffc',
    },
    googleBtn: {
        color: '#000',
    },

    googleLogo: {
        width: 25,
        height: 25,
    },
    emailLogo: {
        width: 25,
        height: 25,
    },
    btnText:{
        flex:1,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20
    },
    txtColor:{
        color: '#fff'
    }
});

export default WelcomeScreen;
