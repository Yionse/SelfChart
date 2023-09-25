import React from 'react';
import {Text, View, Button, useToast, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Apply({index}: any) {
  const toast = useToast();
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      px={4}
      borderBottomColor="blue.100"
      borderBottomWidth={1}
      pb={2}
      my={2}>
      <View>
        <Text>昵称</Text>
        <Text>123456</Text>
      </View>
      <Button
        leftIcon={
          index % 2 === 0 ? (
            <Icon as={Ionicons} name="add" />
          ) : (
            <Icon as={AntDesign} name="reload1" />
          )
        }
        color="black"
        size="sm"
        disabled={index % 2 === 0 ? false : true}
        opacity={index % 2 === 0 ? 1 : 0.3}
        onPress={() => {
          toast.show({
            description: '好友申请已发送',
            duration: 1000,
          });
        }}>
        {index % 2 === 0 ? '添加好友' : '等待验证'}
      </Button>
    </View>
  );
}
