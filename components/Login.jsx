import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TextInput, TouchableHighlight, Image, Modal } from 'react-native';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        setError('');
        setUsername('');
        setPassword('');
    }, [])

    const handleLogin = () => {
        if (username === "demo" && password === "demo") {
            // Navigate to appropriate screen on successful login
            props.navigation.navigate('Profile'); // Change 'Home' to the correct screen name
        } else {
            setShowModal(true);
            setError("Invalid username or password");
            setUsername('');
            setPassword('');
        }
    }

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
                        <TextInput
                            placeholder='Username'
                            style={styles.textInput}
                            placeholderTextColor="grey"
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />
                        <TextInput
                            placeholder='Password'
                            style={styles.textInput}
                            placeholderTextColor="grey"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text style={{ color: '#fff', textAlign: 'right', fontSize: 17, marginRight: 20 }}>Forgot Password</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.btns}
                        underlayColor="transparent"
                        onPress={handleLogin}
                    >
                        <View style={[styles.button, styles.loginBtn]}>
                            <Text style={styles.btnText}>Login Now</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Or</Text>
                    <TouchableHighlight style={styles.btns} underlayColor="transparent">
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
            <Modal transparent={true} visible={showModal} animationType='slide'>
                <View style={styles.centeredView}>
                    <View style={styles.ModalView}>
                        <Text style={styles.modalText}>{error}</Text>
                        <TouchableHighlight
                            style={styles.modalButton}
                            underlayColor="transparent"
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={{ color: 'white' }}>Close Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
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
    btnGText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        flex: 1,
        textAlign: 'center'
    },
    googleBtn: {
        padding: 20,
        fontSize: 24,
        alignItems: 'center',
    },
    signUpText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lasttxt: {
        color: '#7d7d7d',
        fontSize: 18,
    },
    signupTxt: {
        color: '#a26ffc',
        fontSize: 18,
        marginLeft: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    ModalView: {
        margin: 20,
        backgroundColor: '#000',
        borderRadius: 20,
        borderWidth:5,
        borderColor:'#a26ffc',
        padding: 35,
        width:'80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize:20,
        color: 'white'
    },
    modalButton: {
        backgroundColor: '#a26ffc',
        borderRadius: 20,
        padding: 15,
        elevation: 2
    }
});

export default Login;
