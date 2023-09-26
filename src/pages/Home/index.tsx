import React, {useState, useEffect} from 'react';
import {ThemeContext} from './../../contexts';
import theme from './../../theme/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import AddUser from './AddUser';
import ChatModel from './ChatModel';

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
        </Stack.Navigator>
      </ThemeContext.Provider>
    </>
  );
}
