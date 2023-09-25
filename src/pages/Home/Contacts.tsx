import React from 'react';
import {ScrollView} from 'native-base';
import MessagesItem from './MessagesItem';
import _ from 'lodash';

export default function Contacts() {
  return (
    <ScrollView flex={1}>
      {_.range(1, 10).map(index => (
        <MessagesItem type="contact" key={index} />
      ))}
    </ScrollView>
  );
}
