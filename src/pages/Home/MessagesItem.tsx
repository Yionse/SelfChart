import React, {useContext} from 'react';
import {Text, Pressable} from 'native-base';
import {ThemeContext} from '../../contexts';
import {useNavigation} from '@react-navigation/native';

export default function Item() {
  const {currentTheme} = useContext(ThemeContext);
  const navigation = useNavigation<any>();
  return (
    <>
      <Pressable
        borderBottomColor={currentTheme.chartBorderBottomColor}
        borderBottomWidth={1}
        borderStyle="solid"
        height={16}
        py={2}
        paddingLeft={4}
        _pressed={{
          backgroundColor: currentTheme.chartBorderBottomColor,
        }}
        onPress={() => {
          navigation.navigate('ChatModel', {
            title: '从聊天界面',
          });
        }}>
        <Text fontSize="xl" lineHeight={24}>
          123456
        </Text>
        <Text opacity="0.4" fontSize="xs">
          你吃饭了没
        </Text>
      </Pressable>
    </>
  );
}
