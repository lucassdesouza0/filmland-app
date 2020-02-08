import React from 'react';
import {View, Text} from 'react-native';

import Input from '../../components/Input';

export default function FilmsSearch() {
  return (
    <View>
      <Text>Busque seu filme pelo nome</Text>
      <Input />
    </View>
  );
}
