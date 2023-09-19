import React, {useState, useRef} from 'react';
import {Formik} from 'formik';
import {Icon, Input, Button} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

export default function Login() {
  const style = StyleSheet.create({
    inputStyle: {
      opacity: 0.8,
      borderWidth: 1,
      fontSize: 16,
      borderColor: 'transparent',
      paddingLeft: 10,
    },
  });

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
              placeholder="请输入账号"
              onChangeText={handleChange('user')}
              onBlur={handleBlur}
              InputLeftElement={
                <Icon as={AntDesign} name="user" size={6} marginLeft={2} />
              }
              backgroundColor="rgba(255,255,255,0.2)"
              _focus={{opacity: 1}}
              style={style.inputStyle}
            />
            <Input
              value={values.pass}
              type="password"
              placeholder="请输入密码"
              onChangeText={handleChange('pass')}
              onBlur={handleBlur}
              InputLeftElement={
                <Icon
                  as={MaterialIcons}
                  name="wifi-tethering"
                  size={6}
                  marginLeft={2}
                />
              }
              _focus={{opacity: 1}}
              mt={5}
              backgroundColor="rgba(255,255,255,0.2)"
              style={style.inputStyle}
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
