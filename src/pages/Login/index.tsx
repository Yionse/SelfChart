import React, {useContext, useEffect, useState} from 'react';
import {View, StatusBar, Pressable} from 'native-base';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import {Animated} from 'react-native';
import Login from './Login';
import Register from './Register';
import {SetIndexContext} from '../../contexts';

export default function LoginScreen() {
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
    <>
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
    </>
  );
}
