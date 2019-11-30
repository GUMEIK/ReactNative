import React, { Component } from 'react'
import {View,Text} from 'react-native'
export default class Details extends Component {
    static navigationOptions = {
        title: 'Detail',
        // headerStyle: {
        //     backgroundColor: '#ddd',
        // },
        // headerTintColor: '#ddd',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
    };
    render() {
        return (
            <View>
                <Text>
                    Details页面
                </Text>
            </View>
        )
    }
}
