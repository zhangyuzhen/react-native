/**
 * Created by dell on 2017/4/7.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    DeviceEventEmitter,
    Dimensions,
    ToastAndroid,
    InteractionManager,
    TouchableOpacity
} from 'react-native';
var { NativeModules } = require('react-native');
const {width,height}=Dimensions.get('window');
const itemWidth = width / 3;
import TabNavigator from 'react-native-tab-navigator';
import Header from './header';
import TestPage from './TestPage';
import JestPage from './JestPage';
import FlowPage from './FlowPage';
import FindPage from './FindPage';
import NavigationView from './NavigationView.js'


const HOME = 'home';
const HOME_NORMAL = require('./img/tab/cart_normal.png');
const HOME_FOCUS = require('./img/tab/B4-1.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./img/tab/category_normal.png');
const CATEGORY_FOCUS = require('./img/tab/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('./img/tab/faxian_normal.png');
const FAXIAN_FOCUS = require('./img/tab/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('./img/tab/home_normal.png');
const CART_FOCUS = require('./img/tab/home_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./img/tab/personal_normal.png');
const PERSONAL_FOCUS = require('./img/tab/personal_focus.png');

class MyComponent extends Component{
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:HOME,
        };
    }
        _renderTabItem(img, selectedImg, tag, childView){
            return (
                <TabNavigator.Item
                    selected={this.state.selectedTab === tag}
                    renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                    onPress={() => this.setState({ selectedTab: tag })}>
                    {childView}
                </TabNavigator.Item>
            );
        }

        static _createChildView(tag) {
            return (
                <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:22}}>{tag}</Text>
                </View>
            )
        }

    render(){
        return(
            <View style={{flex: 1}} >
               <Header/>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME,<TestPage nav={this.props.nav}/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, <FlowPage/>)}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, <JestPage/>)}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, <FindPage/>)}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <FindPage/>)}
                </TabNavigator>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#333333',
        alignItems: 'center'
    },

    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 10
    }
});
export default MyComponent;
