import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import { Image, TouchableOpacity } from 'react-native';
import {Profile} from './components/Profile'; // Adjust import based on export type

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ title: "", headerTintColor: 'white', headerStyle: { backgroundColor: "#000" } }}>
        <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerRight: () => null }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerRight: () => <LogoutButton /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LogoutButton = () => {
  const navigation = useNavigation(); // Get navigation object using useNavigation hook

  const handleLogout = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
      <Image source={require('./images/logout.png')} style={{ width: 30, height: 30, }} />
    </TouchableOpacity>
  );
};

export default App;
