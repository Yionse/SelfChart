import React, {useState, useRef} from 'react';
import {Formik} from 'formik';
import {Icon, Input, Button} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Login() {
  const onLogin = () => {
    console.log('点击了登录按钮');
  };

  return (
    <Formik initialValues={{user: '', pass: ''}} onSubmit={onLogin}>
      {({values, handleChange, handleBlur}) => {
        return (
          <>
            <Input
              value={values.user}
              bg="rgba(255,255,255, .4)"
              _focus={{
                backgroundColor: 'rgba(255,255,255, .8)',
                borderColor: 'skyblue',
                opacity: 1,
              }}
              opacity={0.8}
              borderWidth={1}
              borderRadius={20}
              placeholder="请输入账号"
              fontSize="sm"
              paddingLeft={6}
              onChangeText={handleChange('user')}
              onBlur={handleBlur}
              InputLeftElement={<Icon as={AntDesign} name="user" />}
            />
            <Input
              value={values.pass}
              type="password"
              bg="rgba(255,255,255, .4)"
              _focus={{
                backgroundColor: 'rgba(255,255,255, .8)',
                borderColor: 'skyblue',
                opacity: 1,
              }}
              opacity={0.8}
              borderWidth={1}
              borderRadius={20}
              placeholder="请输入密码"
              fontSize="sm"
              paddingLeft={6}
              onChangeText={handleChange('pass')}
              onBlur={handleBlur}
              InputLeftElement={<Icon as={AntDesign} name="user" />}
              mt={5}
            />
            <Button mt={10} borderRadius={10}>
              登录
            </Button>
          </>
        );
      }}
    </Formik>
  );
}
