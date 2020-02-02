import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import StatusBar from '../../shared/statusBar';
import {get} from '../../store/ducks/main';

import {bindActionCreators} from 'redux';

class Main extends Component {
  render() {
    const {} = this.props;
    return (
      <View>
        <StatusBar />
        <Text>{this.props.state}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  state: state.main.state,
});

const mapDispatchToProps = dispatch => bindActionCreators({get}, dispatch);

export default Main = connect(mapStateToProps, mapDispatchToProps)(Main);
