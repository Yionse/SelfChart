import React, {useState, useRef} from 'react';
import {Input, Pressable, Text} from 'native-base';

export default function Phone() {
  const codeBtnHandle = () => {
    console.log(phone.current);
  };

  const [codeBtnText, setCodeBtnText] = useState('获取验证码');
  const phone = useRef('');

  return (
    <>
      <Input
        type="Number"
        borderColor="#ccc"
        placeholder="请输入手机号"
        fontSize="md"
        height={16}
        bg="rgba(255,255,255, .1)"
        _focus={{borderColor: '#ccc', bg: 'rgba(255,255,255, .3)'}}
        paddingLeft={6}
        onChangeText={e => (phone.current = e)}
        maxLength={11}
      />
      <Input
        placeholder="请输入验证码"
        fontSize="md"
        height={16}
        bg="rgba(255,255,255, .1)"
        _focus={{borderColor: '#ccc', bg: 'rgba(255,255,255, .3)'}}
        paddingLeft={6}
        borderColor="#ccc"
        marginTop={4}
        maxLength={6}
        rightElement={
          <Pressable onPress={codeBtnHandle} _pressed={{color: 'skyblue'}}>
            <Text
              marginRight={5}
              opacity={codeBtnText === '获取验证码' ? 1 : 0.6}>
              {codeBtnText}
            </Text>
          </Pressable>
        }
      />
    </>
  );
}
