import React, {useState} from 'react';
import {ThemeContext} from './../../contexts';
import theme from './../../theme/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import AddUser from './AddUser';
import ChatModel from './ChatModel';
import UserInfo from '../Settings/UserInfo';
import CountSecure from '../Settings/CountSecure';

const Stack = createNativeStackNavigator();

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = theme[themeIndex];

  return (
    <>
      <ThemeContext.Provider value={{themeIndex, currentTheme, setThemeIndex}}>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{title: '个人设置'}}
          />
          <Stack.Screen
            name="AddUser"
            component={AddUser}
            options={{title: '添加好友'}}
          />
          <Stack.Screen
            name="ChatModel"
            component={ChatModel}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="UserInfo"
            component={UserInfo}
            options={{title: '个人信息'}}
          />
          <Stack.Screen
            name="CountSecure"
            component={CountSecure}
            options={{title: '账户安全'}}
          />
        </Stack.Navigator>
      </ThemeContext.Provider>
    </>
  );
}
