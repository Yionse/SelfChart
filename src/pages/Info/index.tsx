import React from 'react';
import {StyleSheet} from 'react-native';
import Device from './DeviceInfo';
import User from './UserInfo';

export const infoStyle = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingVertical: 4,
    marginHorizontal: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 8,
    borderColor: '#87CEEB',
    height: 40,
    lineHeight: 40,
    borderBottomWidth: 2,
  },
});

export default function Info() {
  return (
    <>
      <User />
      <Device />
    </>
  );
}
