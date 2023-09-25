import React from 'react';
import {ScrollView, Text} from 'native-base';
import Item from './MessagesItem';
import _ from 'lodash';

export default function Chart() {
  return (
    <>
      <ScrollView flex={1}>
        {_.range(1, 20).map(index => (
          <Item key={index} />
        ))}
      </ScrollView>
    </>
  );
}
