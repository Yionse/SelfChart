import React, {useContext, useState} from 'react';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Drawer} from 'react-native-drawer-layout';
import {ThemeContext} from '../../contexts';
import Info from '../Info';
import Chart from './Chat';
import Contacts from './Contacts';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<any>();
  const {currentTheme} = useContext(ThemeContext);
  return (
    <>
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
              <>
                <Icon
                  as={AntDesign}
                  name="adduser"
                  size={6}
                  color={currentTheme?.headerLeftBtn}
                  marginRight={2}
                  onPress={() => navigation.navigate('AddUser')}
                />
              </>
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
    </>
  );
}
