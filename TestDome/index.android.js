/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    WebView,
    BackAndroid
} from 'react-native';
import _index from './app/Views/Dashboard/index.android.js';
import { NaviGoBack } from './app/Views/Dashboard/CommonUtils';

import MainScreen from './app/Views/Dashboard/index.android.js';
import JdWebView from './app/Views/Dashboard/WebView.js';

class TestDome extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: 'main', index: 0, id:'main'}}
            renderScene={(route, navigator) => TestDome._renderPage(route,navigator)}
        />
    )
  }

  static _renderPage(route, nav) {
    switch (route.id) {
      case 'main':
        return (<MainScreen nav={nav}/>);
        break;
      case 'webview':
        return (<JdWebView url={route.url}/>);
        break;
    }
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  }
});
AppRegistry.registerComponent('TestDome', () => TestDome);
// export default TestDome;