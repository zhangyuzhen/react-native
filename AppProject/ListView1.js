/**
 * Created by dell on 2017/4/1.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// require('./src/app');
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
}from 'react-native';
var ImgList=[
    require('./img/b2.png'),
    require('./img/b3.png'),
    require('./img/b4.png'),
    require('./img/b5.png'),
    require('./img/b6.png'),
    require('./img/b7.png'),
    require('./img/b8.png'),
    require('./img/b12.png'),
    require('./img/b13.png'),
    require('./img/b14.png'),
];
class ListViewText extends Component{
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state={
            dataSource:ds.cloneWithRows([
                'John','Joel','James','Jimmy','Jackson','Jillian','Julie','Devin','kjkjj','jytiuyu'
            ])
        }
    }

    _renderRow(rowData:string,sectionId:number,rowID:number){
        var imgSource=ImgList[rowID];
        return(
            <TouchableOpacity>
                <View>
                    <View style={{flexDirection:'row',paddingLeft:15,backgroundColor:'#f6f6f6'}}>
                        <Image source={imgSource} style={{height:50,width:50}}/>
                        <Text style={{flex:1,fontSize:16,color:'blue',paddingTop:15,paddingLeft:15}}>{rowData+'我是测试号哦======='}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }

    render(){
        return(
            <View style={{flex:1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        )
    }

}

AppRegistry.registerComponent('AppProject',()=>ListViewText);