import React from 'react';
import {ScrollView} from 'native-base';
import MessagesItem from './MessagesItem';
import _ from 'lodash';

export default function Chat() {
  return (
    <>
      <ScrollView flex={1}>
        {_.range(1, 20).map(index => (
          <MessagesItem key={index} />
        ))}
      </ScrollView>
    </>
  );
}
