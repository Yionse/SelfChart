import React from 'react';
import {Text, View} from 'native-base';

export default function UserInfo({infoStyle}: any) {
  const {headerText, text} = infoStyle;
  return (
    <>
      <View>
        <Text style={headerText}>个人信息</Text>
        <Text style={text}>设备账号：123456</Text>
        <Text style={text}>注册时间：YYYY-MM-DD HH:MM:SS</Text>
        <Text style={text}>好友数量：1</Text>
      </View>
    </>
  );
}
