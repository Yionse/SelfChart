import React, {useState, useContext} from 'react';
import {Formik} from 'formik';
import {Icon, Input, Button, Text, View, Pressable} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {SetIndexContext} from '../../contexts';
import {useNavigation} from '@react-navigation/native';

export const isClickHandle = (currentVal: string[]) => {
  return currentVal.every(str => str !== '');
};

export default function Login() {
  const [isShowPass, setIsShowPass] = useState(false);
  const setIndex = useContext(SetIndexContext);
  const navigation = useNavigation<any>();

  const style = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      fontSize: 16,
      borderColor: 'transparent',
      paddingLeft: 10,
    },
  });

  const onLogin = () => {
    console.log('点击了登录按钮');
  };

  const handleRegisterForget = (text: string) => {
    if (text === '忘记密码') {
      navigation.navigate('Forget');
    } else {
      setIndex(1);
    }
  };

  return (
    <Formik initialValues={{user: '', pass: ''}} onSubmit={onLogin}>
      {({values, handleChange, handleBlur, handleSubmit}) => {
        return (
          <>
            <Input
              value={values.user}
              placeholder="请输入账号"
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              InputLeftElement={
                <Icon as={AntDesign} name="user" size={6} marginLeft={2} />
              }
              borderRadius={20}
              mx={4}
              style={style.inputStyle}
            />
            <Input
              value={values.pass}
              type={isShowPass ? 'text' : 'password'}
              placeholder="请输入密码"
              onChangeText={handleChange('pass')}
              onBlur={handleBlur('pass')}
              InputLeftElement={
                <Icon
                  as={MaterialIcons}
                  name="wifi-tethering"
                  size={6}
                  marginLeft={2}
                />
              }
              InputRightElement={
                <Pressable
                  onPress={() => {
                    setIsShowPass(!isShowPass);
                  }}>
                  <Icon
                    as={AntDesign}
                    name={isShowPass ? 'eyeo' : 'eye'}
                    size={6}
                    marginRight={2}
                  />
                </Pressable>
              }
              mt={5}
              mx={4}
              borderRadius={20}
              style={style.inputStyle}
            />
            <View
              flexDirection="row"
              justifyContent="space-between"
              h={6}
              paddingRight={4}
              mt={4}
              px={4}>
              {['立即注册', '忘记密码'].map(text => {
                return (
                  <Pressable
                    key={text}
                    _pressed={{
                      opacity: 1,
                      color: 'skyblue',
                    }}
                    opacity={0.6}
                    color="skyblue"
                    onPress={() => {
                      handleRegisterForget(text);
                    }}>
                    <Text>{text}</Text>
                  </Pressable>
                );
              })}
            </View>

            <Button
              mt={4}
              borderRadius={10}
              onPress={handleSubmit}
              mx={4}
              disabled={!isClickHandle(Object.values(values))}
              background={
                isClickHandle(Object.values(values)) ? '#0891b2' : 'gray.400'
              }>
              登录
            </Button>
          </>
        );
      }}
    </Formik>
  );
}
