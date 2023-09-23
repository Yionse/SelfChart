import React from 'react';
import {ScrollView, Text} from 'native-base';
import Item from './Item';
import _ from 'lodash';

export default function Chart() {
  return (
    <>
      <ScrollView flex={1}>
        {_.range(1, 20).map(() => (
          <Item />
        ))}
      </ScrollView>
    </>
  );
}
