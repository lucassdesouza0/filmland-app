import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import Modal from 'react-native-modal';
import {IconButton} from 'react-native-paper';

export default function Detail() {
  const dispatch = useDispatch();

  const show = useSelector(state => state.map.showCinemaDetail);
  const data = useSelector(state => state.map.cinemaDetail);

  function closeModal() {
    dispatch({type: 'SHOW_CINEMA_DETAIL'});
  }
  return (
    <Modal
      visible={show}
      coverScreen={false}
      hasBackdrop={true}
      style={styles.modal}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.addressTitle}>
            Endereço:
            <Text style={styles.address}> {data.vicinity}</Text>
          </Text>
          <IconButton
            style={styles.close}
            icon="close"
            color="#fff"
            size={25}
            onPress={closeModal}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    flexGrow: 4,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressTitle: {
    fontWeight: 'bold',
  },
  address: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  close: {
    marginTop: 20,
    backgroundColor: '#142850',
    alignSelf: 'center',
  },
});
