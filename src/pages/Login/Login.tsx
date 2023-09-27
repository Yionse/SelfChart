import React, {useState, useContext, useCallback, useRef} from 'react';
import {Formik} from 'formik';
import {
  Icon,
  Input,
  Button,
  Text,
  View,
  Pressable,
  useToast,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, BackHandler} from 'react-native';
import {SetIndexContext, TokenContext} from '../../contexts';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export const isClickHandle = (currentVal: string[]) => {
  return currentVal.every(str => str !== '');
};

export default function Login() {
  const [isShowPass, setIsShowPass] = useState(false);
  const setIndex = useContext(SetIndexContext);
  const navigation = useNavigation<any>();
  const inputRef = useRef(null);
  const style = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      fontSize: 16,
      borderColor: 'transparent',
      paddingLeft: 10,
    },
  });
  const toast = useToast();
  const {setToken, saveData} = useContext(TokenContext);
  const onLogin = ({user, pass}: {user: string; pass: string}) => {
    if (user === '1' && pass === '1') {
      setToken('登录');
      saveData('登录');
    } else {
      toast.show({
        description: '用户名密码错误',
        duration: 1000,
      });
    }
  };

  const handleRegisterForget = (text: string) => {
    if (text === '忘记密码') {
      navigation.navigate('Forget');
    } else {
      setIndex(1);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp(); // 回到桌面
        return true; // 阻止默认的返回行为
      };
      // 添加事件监听器
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        // 移除事件监听器
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

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
              ref={inputRef}
              isDisabled={isShowPass}
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
                    if (isShowPass) {
                    }
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
            {isShowPass ? (
              <Text textAlign="right" pr={4} opacity=".3">
                禁止输入
              </Text>
            ) : null}
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
