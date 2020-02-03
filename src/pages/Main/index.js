import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import {connect} from 'react-redux';

import {get} from '../../store/ducks/main';

import StatusBar from '../../shared/statusBar';
import FilmsSearch from '../FilmsSearch';
import TheatersSearch from '../TheatersSearch';

import {bindActionCreators} from 'redux';

class Main extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'music', title: 'Music', icon: 'queue-music'},
      {key: 'albums', title: 'Albums', icon: 'album'},
      {key: 'recents', title: 'Recents', icon: 'history'},
    ],
  };
  _handleIndexChange = index => this.setState({index});
  _renderTab = BottomNavigation.SceneMap({
    films: FilmsSearch,
    theaters: TheatersSearch,
  });
  render() {
    const {} = this.props;
    return (
      <View>
        <StatusBar />
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderTab}
        />
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
