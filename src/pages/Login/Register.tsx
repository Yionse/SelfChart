import React, {useState} from 'react';
import {Formik} from 'formik';
import {Icon, Input, Button, Pressable} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {isClickHandle} from './Login';

export default function Register() {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  const style = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      fontSize: 16,
      borderColor: 'transparent',
      paddingLeft: 10,
    },
  });

  const onRegister = () => {
    console.log('点击了注册按钮');
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <Formik
        initialValues={{phone: '', pass: '', confirmPass: '', userName: ''}}
        onSubmit={onRegister}>
        {({values, handleChange, handleBlur, handleSubmit}) => {
          return (
            <>
              {['phone', 'userName'].map((typeStr: string) => {
                return (
                  <Input
                    key={typeStr}
                    value={typeStr === 'phone' ? values.phone : values.userName}
                    placeholder={
                      typeStr === 'phone' ? '请输入手机号' : '请输入昵称'
                    }
                    onChangeText={handleChange(
                      typeStr === 'phone' ? 'phone' : 'userName',
                    )}
                    onBlur={handleBlur(typeStr === 'phone' ? 'phone' : 'name')}
                    InputLeftElement={
                      <Icon
                        as={AntDesign}
                        name={typeStr === 'phone' ? 'phone' : 'user'}
                        size={6}
                        marginLeft={2}
                      />
                    }
                    borderRadius={20}
                    mt={5}
                    mx={4}
                    style={style.inputStyle}
                  />
                );
              })}
              {['pass', 'confirmPass'].map((typeStr: string) => {
                return (
                  <Input
                    key={typeStr}
                    value={
                      typeStr === 'pass' ? values.pass : values.confirmPass
                    }
                    mx={4}
                    type={
                      (typeStr === 'pass' ? isShowPass : isShowConfirmPass)
                        ? 'text'
                        : 'password'
                    }
                    placeholder={
                      typeStr === 'pass' ? '请输入密码' : '再次输入密码'
                    }
                    onChangeText={handleChange(
                      typeStr === 'pass' ? 'pass' : 'confirmPass',
                    )}
                    onBlur={handleBlur(
                      typeStr === 'pass' ? 'pass' : 'confirmPass',
                    )}
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
                          if (typeStr === 'pass') {
                            setIsShowPass(!isShowPass);
                          } else {
                            setIsShowConfirmPass(!isShowConfirmPass);
                          }
                        }}>
                        <Icon
                          as={AntDesign}
                          name={
                            (
                              typeStr === 'pass'
                                ? isShowPass
                                : isShowConfirmPass
                            )
                              ? 'eyeo'
                              : 'eye'
                          }
                          size={6}
                          marginRight={2}
                        />
                      </Pressable>
                    }
                    mt={5}
                    borderRadius={20}
                    style={style.inputStyle}
                  />
                );
              })}
              <Button
                mt={4}
                borderRadius={10}
                onPress={handleSubmit}
                mx={4}
                disabled={!isClickHandle(Object.values(values))}
                bg={
                  isClickHandle(Object.values(values)) ? '#0891b2' : 'gray.400'
                }>
                注册
              </Button>
            </>
          );
        }}
      </Formik>
    </KeyboardAvoidingView>
  );
}
