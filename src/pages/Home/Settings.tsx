import React from 'react';
import {View, Text, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function Settings() {
  const userSetting: {text: string; routePath: string}[] = [
    {
      text: '个人信息',
      routePath: 'UserInfo',
    },
    {
      text: '账号安全',
      routePath: 'CountSecure',
    },
  ];
  const navigation = useNavigation<any>();
  return (
    <>
      <View flex={1}>
        {userSetting.map(
          ({text, routePath}: {text: string; routePath: string}) => {
            return (
              <Pressable
                key={routePath}
                borderBottomColor="gray.500"
                borderStyle="solid"
                borderBottomWidth={1}
                flexDirection="row"
                pl={4}
                pr={10}
                justifyContent="space-between"
                _pressed={{
                  background: 'gray.200',
                }}
                onPress={() => navigation.navigate(routePath)}>
                <Text height={12} pt={3} fontSize="lg">
                  {text}
                </Text>
                <Text height={12} pt={3} fontSize="lg">
                  {'>'}
                </Text>
              </Pressable>
            );
          },
        )}
      </View>
    </>
  );
}
