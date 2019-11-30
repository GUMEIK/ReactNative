import React, { Component } from 'react'
import {View,Switch} from 'react-native'
export default class SwitchCom extends Component {
    state = {
        choose:false
    }
    render() {
        return (
            <View>
                {/* 注意这是一个“受控组件”（controlled component）。
                你必须使用onValueChange回调来更新value属性以响应用户的操作。
                如果不更新value属性，组件只会按一开始给定的value值来渲染且保持不变，
                看上去就像完全点不动。
                @keyword checkbox
                @keyword toggle 
                @keyword 单选 
                @keyword 多选 
                */}
                <Switch
                // 设置开关的状态，是开还是关(如果没有该属性，开关将只有)
                value = {this.state.choose}
                // 是否禁用
                disabled = {false}
                // 开启状态背景色
                trackColor = {
                    'green'
                }
                // 关闭状态背景色
                // tintColor = {
                //     'pink'
                // }
                // 圆形按钮颜色
                thumbColor = {
                    'red'
                }
                // testID 用来在端到端测试中定位此视图。
                testID = {
                    'switchId'
                }
                // 当值改变的时候调用此回调函数，参数为新的值。
                onValueChange = {(value)=>{
                    this.setState({
                        choose:value
                    })
                }}
                />
            </View>
        )
    }
}
