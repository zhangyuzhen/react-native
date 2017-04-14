/**
 * Created by dell on 2017/4/11.
 */
'use strict';
import React, { Component } from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet
} from 'react-native';

class Header extends Component{
    render(){
        return(

                <View style={styles.all}>
                    <Image source={require('./img/header/header_logo.png')} style={styles.logo}/>
                    <View style={styles.long}>
                        <Image source={require('./img/header/icon_search.png')} style={styles.search}/>
                        <TextInput placeholder='搜索京东商品/店铺' keyboardType='web-search' style={styles.inputText}/>
                        <Image source={require('./img/header/icon_voice.png')} style={styles.voice}/>
                    </View>
                    <Image source={require('./img/header/icon_qr.png')} style={styles.saom}/>
                </View>
        )
    }


}

const styles=StyleSheet.create({
    all:{
        flexDirection:"row",
        backgroundColor:'#d74047',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        height:55
    },
    logo:{
        width:64,
        height:24,
        resizeMode:'stretch'
    },
    long:{
        height:38,
        flexDirection:'row',
        backgroundColor:'#ffffff',
        borderRadius:5,
        marginLeft:8,
        marginRight:12,
        alignItems:'center',
        flex:1
    },
    search:{
        height:16.7,
        width:16.7,
        marginLeft:6,
        marginRight:6,
        resizeMode:'stretch'
    },
    inputText:{
        flex:1,
        fontSize:14,
        backgroundColor:'transparent',
    },
    voice:{
        resizeMode:'stretch',
        height:20,
        width:5,
        marginLeft:8,
        marginRight:8
    },
    saom:{
        resizeMode:'stretch',
        height:26.7,
        width:26.7,
    }
})


export default Header;