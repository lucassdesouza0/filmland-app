import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Modal from 'react-native-modal';

export default function FilmDetail() {
  const show = useSelector(state => state.films.modal);
  const data = useSelector(state => state.films.modalData);

  const dispatch = useDispatch();

  function closeModal() {
    dispatch({type: 'SHOW_DETAIL_MODAL'});
  }

  return (
    <Modal
      visible={show}
      coverScreen={false}
      hasBackdrop={true}
      style={styles.modal}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Button title="Fechar" onPress={closeModal} />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
