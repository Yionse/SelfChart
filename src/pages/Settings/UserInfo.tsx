import React, {useContext} from 'react';
import {Text, Button} from 'native-base';
import {TokenContext} from '../../contexts';

export default function UserInfo() {
  const {setToken, saveData} = useContext(TokenContext);
  return (
    <>
      <Text>个人信息</Text>
      <Button
        onPress={() => {
          saveData('');
          setToken('');
        }}>
        退出登录
      </Button>
    </>
  );
}
