import React from 'react';
import {Text} from 'native-base';

export default function ChatModel({route, navigation}: any) {
  navigation.setOptions({title: route?.params?.title});
  return (
    <>
      <Text>对话框</Text>
    </>
  );
}
