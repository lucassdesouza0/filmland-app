import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useSelector} from 'react-redux';

export default function Loading() {
  return <ActivityIndicator size="large" color="#000" />;
}
