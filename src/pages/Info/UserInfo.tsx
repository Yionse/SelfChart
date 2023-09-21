import React from 'react';
import {Text, View} from 'native-base';
import {infoStyle} from './index';

export default function UserInfo() {
  return (
    <>
      <View>
        <Text style={infoStyle.headerText}>个人信息</Text>
        <Text style={infoStyle.text}>设备账号：123456</Text>
        <Text style={infoStyle.text}>注册时间：YYYY-MM-DD HH:MM:SS</Text>
        <Text style={infoStyle.text}>好友数量：1</Text>
      </View>
    </>
  );
}
