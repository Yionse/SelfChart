import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chart from './Chart';
import Contacts from './Contacts';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Drawer} from 'react-native-drawer-layout';
import Info from '../Info';
import {ThemeContext} from './../../contexts';
import theme from './../../theme/index';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Home() {
  const [open, setOpen] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = theme[themeIndex];
  const navigation = useNavigation<any>();
  return (
    <>
      <ThemeContext.Provider value={{themeIndex, currentTheme, setThemeIndex}}>
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          renderDrawerContent={() => <Info />}
          swipeEdgeWidth={128}>
          <Tab.Navigator
            initialRouteName="Chart"
            screenOptions={{
              tabBarLabelStyle: {
                display: 'none',
              },
              tabBarActiveBackgroundColor: `${currentTheme?.tabBarActiveColor}`,
              headerLeft: () => (
                <Icon
                  as={AntDesign}
                  name="infocirlceo"
                  size={6}
                  color={currentTheme?.headerLeftBtn}
                  marginLeft={2}
                  onPress={() => setOpen(true)}
                />
              ),
              headerRight: () => (
                <Icon
                  as={AntDesign}
                  name="adduser"
                  size={6}
                  color={currentTheme?.headerLeftBtn}
                  marginRight={2}
                  onPress={() => navigation.navigate('AddUser')}
                />
              ),
            }}>
            <Tab.Screen
              name="Chart"
              component={Chart}
              options={{
                title: '聊天',
                tabBarIcon: () => (
                  <Icon
                    as={AntDesign}
                    name="message1"
                    size={6}
                    color={currentTheme?.primaryColor}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Contacts"
              component={Contacts}
              options={{
                title: '联系人',
                tabBarIcon: () => (
                  <Icon
                    as={FontAwesome}
                    name="user"
                    size={6}
                    color={currentTheme?.primaryColor}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </Drawer>
      </ThemeContext.Provider>
    </>
  );
}
