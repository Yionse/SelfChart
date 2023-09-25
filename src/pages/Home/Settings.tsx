import React from 'react';
import {View, Text, Pressable} from 'native-base';

export default function Settings() {
  return (
    <>
      <View flex={1}>
        {['个人信息', '账号安全', '版本信息'].map(val => {
          return (
            <Pressable
              key={val}
              borderBottomColor="gray.500"
              borderStyle="solid"
              borderBottomWidth={1}
              flexDirection="row"
              pl={4}
              pr={10}
              justifyContent="space-between"
              _pressed={{
                background: 'gray.200',
              }}>
              <Text height={12} pt={3} fontSize="lg">
                {val}
              </Text>
              <Text height={12} pt={3} fontSize="lg">
                {'>'}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </>
  );
}
