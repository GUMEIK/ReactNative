import React, { Component } from 'react'
import {View,Text} from 'react-native'
import Navi from './components/Navigation/Navigation'
import MyWebView from './components/MyWebView'
export default class App extends Component {
  render() {
    return <MyWebView/>
  }
}


// 接下来,我们需要安装的是 react-native-gesture-handler、 react-native-reanimated 和 react-native-screens. 如果