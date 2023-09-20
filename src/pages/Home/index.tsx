import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chart from './Chart';
import Contacts from './Contacts';
import {Icon, Button, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Drawer} from 'react-native-drawer-layout';
import Info from '../Info';

const Tab = createBottomTabNavigator();

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => <Info />}
        swipeEdgeWidth={128}>
        <Tab.Navigator initialRouteName="Chart">
          <Tab.Screen
            name="Chart"
            component={Chart}
            options={{
              title: '聊天',
              tabBarIcon: () => (
                <Icon as={AntDesign} name="message1" size={6} color="skyblue" />
              ),
              tabBarActiveBackgroundColor: 'rgba(135,206,235,.3)',
            }}
          />
          <Tab.Screen
            name="Contacts"
            component={Contacts}
            options={{
              title: '联系人',
              tabBarIcon: () => (
                <Icon as={FontAwesome} name="user" size={6} color="skyblue" />
              ),
              tabBarActiveBackgroundColor: 'rgba(135,206,235,.3)',
            }}
          />
        </Tab.Navigator>
      </Drawer>
    </>
  );
}
