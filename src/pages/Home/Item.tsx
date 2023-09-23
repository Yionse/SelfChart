import React, {useContext} from 'react';
import {Text, Pressable} from 'native-base';
import {ThemeContext} from '../../contexts';

export default function Item() {
  const {currentTheme} = useContext(ThemeContext);
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
        }}>
        <Text fontSize="xl">123456</Text>
        <Text opacity="0.4" fontSize="xs">
          你吃饭了没
        </Text>
      </Pressable>
    </>
  );
}
