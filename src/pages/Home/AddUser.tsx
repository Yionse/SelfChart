import React from 'react';
import {Input, ScrollView, Text, View} from 'native-base';
import _ from 'lodash';
import Apply from './Apply';

export default function AddUser({route}: any) {
  const isFriendApply = route?.params?.isFriendApply || false;
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
          {_.range(1, 20).map(index => {
            if (isFriendApply) {
              return index % 2 !== 0 && <Apply index={index} />;
            } else {
              return <Apply index={index} />;
            }
          })}
        </ScrollView>
      </View>
    </>
  );
}
