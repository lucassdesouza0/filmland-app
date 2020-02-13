import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

export const Loading = () => <ActivityIndicator size="large" color="#000" />;

export const ListLoading = () => (
  <>
    <Placeholder Animation={Fade} style={styles.item} />
    <Placeholder Animation={Fade} style={styles.item} />
    <Placeholder Animation={Fade} style={styles.item} />
    <Placeholder Animation={Fade} style={styles.item} />
    <Placeholder Animation={Fade} style={styles.item} />
  </>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 40,
    backgroundColor: '#EEE',
  },
});
