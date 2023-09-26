import React, {useContext, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Input,
  View,
  Text,
  FlatList,
  Image,
  Button,
} from 'native-base';
import _ from 'lodash';
import {Keyboard} from 'react-native';
import {ThemeContext} from '../../contexts';

export type MessageTProps = {
  key?: number;
  message: string;
};

export default function ChatModel({route, navigation}: any) {
  const scrollRef =
    useRef<{scrollToEnd: (animated: {animated: boolean}) => void}>(null);
  const inputRef = useRef<{click: () => void}>(null);
  navigation.setOptions({title: route?.params?.title});
  const [message, setMessage] = useState<string>('');

  const handleInput = () => {
    if (scrollRef.current) {
      scrollRef.current?.scrollToEnd({animated: false});
    }
  };
  const data: {key: number; message: string}[] = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      message: `${i.toString().concat('阿萨德')}`,
    });
  }
  const scrollOffset = useRef(0);
  const handleScroll = (event: {nativeEvent: {contentOffset: {y: any}}}) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset < scrollOffset.current) {
      Keyboard.dismiss();
    }
    scrollOffset.current = currentOffset;
  };

  return (
    <>
      <KeyboardAvoidingView flex={1}>
        <FlatList
          data={data}
          renderItem={({index, item}) => {
            return index % 2 === 0 ? (
              <Me message={item.message} />
            ) : (
              <Other message={item.message} />
            );
          }}
          initialScrollIndex={data.length - 1}
          flex={1}
          key={'key'}
          bg="amber.100"
          px={6}
          ref={scrollRef}
          onLayout={() => scrollRef.current?.scrollToEnd({animated: false})}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
      </KeyboardAvoidingView>
      <View flexDirection="row" bg="transparent">
        <Input
          onPressIn={handleInput}
          ref={inputRef}
          multiline
          flex={1}
          placeholder="请输入文字"
          rounded="full"
          height={10}
          onChangeText={setMessage}
        />
        <Button
          px={6}
          height={10}
          disabled={!message}
          opacity={!message ? 0.4 : 1}>
          发送
        </Button>
      </View>
    </>
  );
}

function Me({message = ''}: MessageTProps) {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <View flexDirection="row" justifyContent="flex-end" my={2}>
      <Text
        bg={currentTheme?.meMessageBackgroundColor}
        padding={4}
        rounded="2xl"
        flexShrink={1}>
        {message}
      </Text>
      <Image
        source={require('../../assets/me.jpg')}
        size="xs"
        rounded="full"
        ml={2}
        alt="头像"
        mt={1}
      />
    </View>
  );
}

function Other({message = ''}: MessageTProps) {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <View flexDirection="row" justifyContent="flex-start" my={2}>
      <Image
        source={require('../../assets/me.jpg')}
        size="xs"
        rounded="full"
        alt="头像"
        mt={1}
        mr={2}
      />
      <Text
        bg={currentTheme?.otherMessageBackgroundColor}
        padding={4}
        rounded="2xl"
        flexShrink={1}>
        {message}
      </Text>
    </View>
  );
}
