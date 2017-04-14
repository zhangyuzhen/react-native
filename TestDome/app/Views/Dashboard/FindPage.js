/**
 * Created by dell on 2017/4/11.
 */
/**
 * Created by dell on 2017/4/7.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';


export default class FindPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'home'
        };
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#eee',justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'#f00'}}>我是FindPage，导入使用的!</Text>
            </View>
        );
    }
};