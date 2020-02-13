import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Modal from 'react-native-modal';
import {IconButton} from 'react-native-paper';

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
          <View style={styles.header}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>Lançamento: {data.release_date}</Text>
          </View>

          <Text style={styles.overview}>{data.overview}</Text>

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
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    flexGrow: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 14,
    marginVertical: 20,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  close: {
    marginTop: 20,
    backgroundColor: '#142850',
    alignSelf: 'center',
  },
});
