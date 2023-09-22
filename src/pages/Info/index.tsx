import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Device from './DeviceInfo';
import User from './UserInfo';
import {Icon, View} from 'native-base';
import {ThemeContext} from '../../contexts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Info() {
  const {currentTheme, setThemeIndex, themeIndex} = useContext(ThemeContext);
  const changeTheme = () => {
    if (themeIndex === 0) {
      setThemeIndex(1);
    } else {
      setThemeIndex(0);
    }
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
      <View flexDirection="row" my={8} mx={4}>
        <Icon
          as={FontAwesome5}
          name={themeIndex === 0 ? 'sun' : 'moon'}
          size="2xl"
          color={currentTheme?.primaryColor}
          mx={1}
          onPress={changeTheme}
        />
      </View>
    </>
  );
}
