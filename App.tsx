import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, useToast} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Forget from './src/pages/Login/Forget';
import Home from './src/pages/Home';
import {TokenContext} from './src/contexts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Login from './src/pages/Login';
import {AsyncStorage} from 'react-native';
import Init from './src/pages/Init';

function Main() {
  const Stack = createNativeStackNavigator();
  const [token, setToken] = useState<string>('init');
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (token === 'init') {
      navigation.navigate('Init');
    } else if (token === '登录') {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, [token]);
  const saveData = async (token: string) => {
    AsyncStorage.setItem('@token-app', token);
  };
  const fetchData = async () => {
    AsyncStorage.getItem('@token-app').then(res => setToken(res as any));
  };
  useEffect(() => {
    async function fetch() {
      await fetchData();
    }
    fetch();
  }, []);

  return (
    <TokenContext.Provider value={{saveData: saveData, setToken: setToken}}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
        initialRouteName="Init">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Forget"
          component={Forget}
          options={{title: '忘记密码'}}
        />
        <Stack.Screen
          name="Init"
          component={Init}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </TokenContext.Provider>
  );
}

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
