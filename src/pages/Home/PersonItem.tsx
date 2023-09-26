import React, {useContext} from 'react';
import {Text, Pressable} from 'native-base';
import {ThemeContext} from '../../contexts';
import {useNavigation} from '@react-navigation/native';

export default function PersonItem() {
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
            title: '发给谁',
          });
        }}>
        <Text fontSize="xl" lineHeight={44}>
          123456
        </Text>
      </Pressable>
    </>
  );
}
