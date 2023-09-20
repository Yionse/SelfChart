import React from 'react';
import {Text} from 'native-base';
import DeviceInfo from 'react-native-device-info';

export default function Info() {
  let brand = '',
    deviceName = '';
  try {
    brand = DeviceInfo.getBrand();
    DeviceInfo.getDeviceName().then(res => (deviceName = res));
  } catch (e) {}
  return (
    <>
      <Text>当前设备信息：{brand}</Text>
      <Text>{deviceName}</Text>
      <Text>阿打算</Text>
    </>
  );
}
