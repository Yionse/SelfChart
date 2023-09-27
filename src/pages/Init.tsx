import React from 'react';
import {Image} from 'native-base';

export default function Init() {
  return (
    <Image
      source={require('../assets/initPng.jpg')}
      size="full"
      alt="初始化背景图"
    />
  );
}
