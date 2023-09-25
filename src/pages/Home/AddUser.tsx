import React from 'react';
import {Input, ScrollView, Text, View, Button, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _ from 'lodash';

export default function AddUser() {
  return (
    <>
      <View flex={1} p={4}>
        <Text my={1} color="coolGray.300">
          可支持昵称和账号的模糊查找
        </Text>
        <Input
          pl={4}
          fontSize="lg"
          borderWidth={0}
          borderBottomColor="amber.400"
          borderBottomWidth={1}
          placeholder="输入账号或昵称"
        />
        <ScrollView flex={1} my={2}>
          {_.range(1, 20).map(index => (
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
                opacity={index % 2 === 0 ? 1 : 0.3}>
                {index % 2 === 0 ? '添加好友' : '等待验证'}
              </Button>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
