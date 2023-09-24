import React from 'react';
import {ScrollView, Text} from 'native-base';
import MessagesItem from './MessagesItem';
import _ from 'lodash';

export default function Contacts() {
  return (
    <ScrollView flex={1}>
      {_.range(1, 10).map(() => (
        <MessagesItem type="contact" />
      ))}
    </ScrollView>
  );
}
