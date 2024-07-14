import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import { Image } from 'react-native';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{title:"", headerTintColor: 'white', headerStyle:{backgroundColor:"#000"}, headerRight:()=><Image source={require('./images/logo_trans.png')} style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, }} />}}>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{headerRight:()=>''}}/>
        <Stack.Screen name="Login" component={Login} options={{title:"Login Screen"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;