import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NativeBaseProvider, View, Pressable, StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import {Animated} from 'react-native';
import Login from './src/pages/Login';
import Register from './src/pages/Login/Register';
import Forget from './src/pages/Login/Forget';
import Home from './src/pages/Home';
import {SetIndexContext} from './src/contexts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './src/pages/Home/Settings';
import AddUser from './src/pages/Home/AddUser';

function Main() {
  const [routes] = useState([
    {key: 'login', title: '登录'},
    {key: 'register', title: '注册'},
  ]);
  const renderScene = SceneMap({
    login: Login,
    register: Register,
  });

  const [index, setIndex] = useState(0);

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<{
        key: string;
        title: string;
      }>;
    },
  ) => {
    return (
      <View py={5} flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const isCurrent = i === index;
          return (
            <Pressable
              onPress={() => setIndex(i)}
              key={route.key}
              alignItems="center"
              mx={2}>
              <Animated.Text
                style={{
                  paddingVertical: 5,
                  fontSize: isCurrent ? 22 : 18,
                  lineHeight: 22,
                  fontWeight: isCurrent ? 'bold' : 'normal',
                }}>
                {route.title}
              </Animated.Text>
              <Animated.View
                style={{
                  height: 3,
                  backgroundColor: 'skyblue',
                  width: isCurrent ? 60 : 0,
                  marginTop: 10,
                }}
              />
            </Pressable>
          );
        })}
      </View>
    );
  };
  return (
    <SetIndexContext.Provider value={setIndex}>
      <StatusBar backgroundColor="#ccc" />
      <View flex={1} px={2} py={10} bgColor="#eee">
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: 320}}
          renderTabBar={renderTabBar}
        />
      </View>
    </SetIndexContext.Provider>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
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
            name="Settings"
            component={Settings}
            options={{title: '个人设置'}}
          />
          <Stack.Screen
            name="AddUser"
            component={AddUser}
            options={{title: '添加用户'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
