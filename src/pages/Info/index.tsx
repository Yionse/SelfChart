import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Device from './DeviceInfo';
import User from './UserInfo';
import {Icon, View, Text} from 'native-base';
import {ThemeContext} from '../../contexts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Info() {
  const navigation = useNavigation<any>();
  const {currentTheme, setThemeIndex, themeIndex} = useContext(ThemeContext);
  const changeTheme = () => {
    if (themeIndex === 0) {
      setThemeIndex(1);
    } else {
      setThemeIndex(0);
    }
  };
  const settingsHandle = () => {
    navigation.navigate('Settings');
  };
  const infoStyle = StyleSheet.create({
    text: {
      fontSize: 16,
      paddingVertical: 4,
      marginHorizontal: 20,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 8,
      borderColor: currentTheme?.borderColor,
      height: 40,
      lineHeight: 40,
      borderBottomWidth: 2,
    },
  });

  return (
    <>
      <User infoStyle={infoStyle} />
      <Device infoStyle={infoStyle} />
      <View my={8} mx={4}>
        {['主题切换', '个人设置'].map(val => {
          return (
            <View flexDirection="row" my={2} key={val}>
              <Text height={8} lineHeight={30} fontSize={20}>
                {val}：
              </Text>
              <Icon
                as={val === '主题切换' ? FontAwesome5 : AntDesign}
                name={
                  val === '主题切换'
                    ? themeIndex === 0
                      ? 'sun'
                      : 'moon'
                    : 'setting'
                }
                size="2xl"
                color={currentTheme?.primaryColor}
                mx={1}
                onPress={val === '主题切换' ? changeTheme : settingsHandle}
              />
            </View>
          );
        })}
      </View>
    </>
  );
}
