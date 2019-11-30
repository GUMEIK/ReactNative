import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
export default class Home extends Component {
    static navigationOptions = {
        // 添加标题后有时没反应，重载一下就好了
        title: 'Home页面',
        drawerLabel: 'Home',
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          )
    };
    render() {
        return (
            <View>
                <Button
                title="Go to Details"
                // onPress={
                    // ()=>this.props.navigation.navigate('Details')
                    // push一个新页面，无论导航的是不是当前页面
                    // () => this.props.navigation.push('Details')
                    // 打开抽屉
                    // this.props.navigation.openDrawer();
                // }
                />
                <Text>
                    Home页面啊,激发林科大机房看
                </Text>

            </View>
        )
    }
}
