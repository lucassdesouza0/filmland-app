import React, {Component} from 'react';
import {View, StyleSheet, Button, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {get} from '../../store/ducks/main';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Main extends Component {
  static navigationOptions = navigation => ({
    header: null,
  });

  render() {
    const {} = this.props;
    return <View></View>;
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  state: state.main.state,
});

const mapDispatchToProps = dispatch => bindActionCreators({get}, dispatch);

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
