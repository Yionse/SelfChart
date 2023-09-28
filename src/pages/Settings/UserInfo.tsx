import React, {useContext} from 'react';
import {Text, useToast} from 'native-base';
import {TokenContext} from '../../contexts';

export default function UserInfo() {
  const {setToken, saveData} = useContext(TokenContext);
  saveData('');
  setToken('');
  return (
    <>
      <Text>个人信息</Text>
    </>
  );
}
