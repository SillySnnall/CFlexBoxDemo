/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    render() {
        return (
            <View>
                {/*排列方式*/}
                <View style={styles.container}>
                    <Text style={{backgroundColor: 'red', height: 30}}>第一个View</Text>
                    <Text style={{backgroundColor: 'blue', height: 40}}>第二个View</Text>
                    <Text style={{backgroundColor: 'yellow', height: 50}}>第三个View</Text>
                    <Text style={{backgroundColor: 'green', height: 60}}>第四个View</Text>
                </View>
                {/*自动换行*/}
                <View style={styles.container1}>
                    <Text style={{backgroundColor: 'red', width: 80}}>第一个View</Text>
                    <Text style={{backgroundColor: 'blue', width: 150}}>第二个View</Text>
                    <Text style={{backgroundColor: 'yellow', width: 150}}>第三个View</Text>
                    <Text style={{backgroundColor: 'green', width: 230}}>第四个View</Text>
                </View>
                {/*权重布局*/}
                <View style={styles.container}>
                    <Text style={{backgroundColor: 'red', flex: 1}}>第一个View</Text>
                    <Text style={{backgroundColor: 'blue', flex: 2}}>第二个View</Text>
                    <Text style={{backgroundColor: 'yellow', flex: 1}}>第三个View</Text>
                    <Text style={{backgroundColor: 'green', flex: 1}}>第四个View</Text>
                </View>

                {/*单个控件位置*/}
                <View style={styles.container}>
                    <Text style={{backgroundColor: 'red', height: 30, alignSelf: 'flex-start'}}>第一个View</Text>
                    <Text style={{backgroundColor: 'blue', height: 40}}>第二个View</Text>
                    <Text style={{backgroundColor: 'yellow', height: 50}}>第三个View</Text>
                    <Text style={{backgroundColor: 'green', height: 60}}>第四个View</Text>
                </View>
                {/*获取当前屏幕宽度*/}
                <GetDimensions/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        // 主轴方向
        flexDirection: 'row',
        // 顶部距离
        marginTop: 25,
        // 主轴对齐方式
        justifyContent: 'center',
        // 侧轴对齐方式
        alignItems: 'flex-end'
    },

    container1: {
        backgroundColor: 'purple',
        // 主轴方向
        flexDirection: 'row',
        // 顶部距离
        marginTop: 25,
        // 主轴对齐方式
        justifyContent: 'center',
        // 侧轴对齐方式
        alignItems: 'flex-end',
        // 自动换行
        flexWrap: 'wrap'
    },

});

// ---------------获取当前屏幕高度、宽度、分辨率--------------
let dimensions = require("Dimensions");
class GetDimensions extends Component{
    render() {
        return (
            <View>
                {/*获取当前屏幕宽度*/}
                <Text>当前屏幕宽度:{dimensions.get('window').width}</Text>
                <Text>当前屏幕高度:{dimensions.get('window').height}</Text>
                <Text>当前屏幕分辨率:{dimensions.get('window').scale}</Text>
            </View>
        );
    }
}
