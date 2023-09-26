import React from 'react';
import {Pressable, ScrollView, Text} from 'native-base';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import PersonItem from './PersonItem';

export default function Contacts() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView flex={1}>
      <Pressable
        bg="amber.100"
        _pressed={{
          backgroundColor: 'blue.100',
        }}
        flexDirection="row"
        justifyContent="space-between"
        px={4}
        onPress={() => {
          navigation.navigate('AddUser', {
            isFriendApply: true,
          });
        }}>
        <Text height={10} lineHeight="4xl">
          好友申请
        </Text>
        <Text
          fontSize="lg"
          px={2}
          height={6}
          bg="red.500"
          rounded="full"
          mt={2}>
          99
        </Text>
      </Pressable>
      {_.range(1, 20).map(index => (
        <PersonItem key={index} />
      ))}
    </ScrollView>
  );
}
