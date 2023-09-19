import React, {useContext} from 'react';
import {Text} from 'native-base';
import {SetIndexContext} from '../../../App';

export default function home() {
  const setIndex = useContext(SetIndexContext);

  return (
    <>
      <Text>首页</Text>
    </>
  );
}
