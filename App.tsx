import React from 'react';
import {NativeBaseProvider, View, Pressable, StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import {Animated} from 'react-native';
import Phone from './src/pages/Login/Phone';
import Pass from './src/pages/Login/Pass';

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'phone', title: '手机号登录'},
    {key: 'pass', title: '密码登录'},
  ]);
  const renderScene = SceneMap({
    phone: Phone,
    pass: Pass,
  });

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
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#ccc" />
        <View flex={1} px={5} py={10} bgColor="#ccc">
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: 320}}
            renderTabBar={renderTabBar}
          />
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
