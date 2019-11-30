import React, { Component } from 'react'
import {WebView} from 'react-native-webview'
export default class MyWebView extends Component {
    render() {
        return (
            <WebView
            source={{uri: 'http://www.msse.vip'}}
          />
        )
    }
}
