import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login'
import Kanban from './src/Kanban'
import Cadastro from './src/Cadastro'
import Perfil from './src/Perfil'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem vindo ao AppTeste</Text>
      <Button
      title="Go to Login"
      onPress={() => navigation.navigate('Login')}
    />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Kanban" component={Kanban} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;