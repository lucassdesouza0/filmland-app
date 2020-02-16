import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Text, Snackbar} from 'react-native-paper';

export default function SnackBarRedux() {
  const dispatch = useDispatch();

  const snackbar = useSelector(state => state.snackbar);

  function dismiss() {
    dispatch({type: 'SNACKBAR_DISMISS'});
  }

  const {
    options: {style = null},
    showed = false,
    text,
  } = snackbar;

  if (!style) {
    return (
      <Snackbar visible={showed} onDismiss={dismiss} duration={2000}>
        <Text style={styles.text}>{text}</Text>
      </Snackbar>
    );
  }

  return (
    <Snackbar
      style={styles[style]}
      visible={showed}
      duration={2000}
      onDismiss={dismiss}>
      <Text style={styles[`${style}Text`]}>{text}</Text>
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  warnText: {
    color: '#fff',
  },
  warn: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#142850',
    fontWeight: 'bold',
    marginBottom: 60,
  },
  dangerText: {
    fontSize: 14,
    color: '#FFF',
  },
  danger: {
    backgroundColor: 'red',
    marginBottom: 60,
  },
});
