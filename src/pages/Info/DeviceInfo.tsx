import {Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
export type DeviceInfoType = {
  androidId: string;
  baseOs: string;
  brand: string;
  deviceName: string;
  macAddress: string;
  manufacturer: string;
  freeDiskStorage: number;
  phoneNumber: string;
  systemName: string;
  totalMemory: number;
  ip: string;
};

const getDeviceInfo = async () => {
  const {
    getAndroidId,
    getBaseOs,
    getBrand,
    getDeviceName,
    getMacAddress,
    getManufacturer,
    getFreeDiskStorage,
    getPhoneNumber,
    getSystemName,
    getTotalMemory,
    getIpAddress,
  } = DeviceInfo;
  const [
    androidId,
    baseOs,
    deviceName,
    macAddress,
    manufacturer,
    freeDiskStorage,
    phoneNumber,
    systemName,
    totalMemory,
    ip,
  ] = await Promise.all([
    getAndroidId(),
    getBaseOs(),
    getDeviceName(),
    getMacAddress(),
    getManufacturer(),
    getFreeDiskStorage(),
    getPhoneNumber(),
    getSystemName(),
    getTotalMemory(),
    getIpAddress(),
  ]);
  const brand = getBrand();
  return {
    androidId,
    baseOs,
    brand,
    deviceName,
    macAddress,
    manufacturer,
    freeDiskStorage,
    phoneNumber,
    systemName,
    totalMemory,
    ip,
  };
};

export default function Device({infoStyle}: any) {
  const {headerText, text} = infoStyle;
  const [res, setRes] = useState<DeviceInfoType>();
  useEffect(() => {
    getDeviceInfo().then(res => setRes(res));
  }, []);
  const getText = (
    value: string | number | undefined | null,
    isChang: boolean = false,
  ) => {
    if (value) {
      if (isChang) {
        // 将存储单位换算为GB
        value = ((value as number) / Math.pow(1024, 3)).toFixed() + 'G';
      }
      return value;
    }
    return '暂无';
  };

  return (
    <View mt={6}>
      <Text style={headerText}>当前设备信息</Text>
      <Text style={text}>设备ID： {getText(res?.androidId)}</Text>
      <Text style={text}>设备品牌：{getText(res?.brand)}</Text>
      <Text style={text}>设备名称：{getText(res?.deviceName)}</Text>
      <Text style={text}>设备生产厂商：{getText(res?.manufacturer)}</Text>
      <Text style={text}>设备系统名称：{getText(res?.systemName)}</Text>
      <Text style={text}>设备MAC地址：{getText(res?.macAddress)}</Text>
      <Text style={text}>设备IP：{getText(res?.ip)}</Text>
      <Text style={text}>
        设备存储空间：{getText(res?.freeDiskStorage, true)}
      </Text>
      <Text style={text}>设备主存空间：{getText(res?.totalMemory, true)}</Text>
      <Text style={text}>设备电话号码：{getText(res?.phoneNumber)}</Text>
    </View>
  );
}
