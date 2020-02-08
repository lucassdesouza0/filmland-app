import React from 'react';
import {StatusBar} from 'react-native';

const bgColor = 'rgba(255,255,255,0.3)';

export default ({barStyle = 'light-content', translucent = true}) => (
  <StatusBar
    barStyle={barStyle}
    translucent={translucent}
    hidden={false}
    networkActivityIndicatorVisible={true}
    backgroundColor={bgColor}
  />
);
