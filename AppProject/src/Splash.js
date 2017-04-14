/**
 * Created by dell on 2017/3/31.
 */
/**
 * Created by dell on 2017/4/1.
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
    Navigator,
}from 'react-native';
import Login from './Login';
import Welcome from './Welcome';
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
]
var data=[
    'WebViewDemo', 'BannerDemo', 'ModalDemo', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
]
class Splash extends Component{
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state={
            dataSource:ds.cloneWithRows(data)
        }
    }
    _openPage(rowData){
        // console.log("rowData[0]");

        let nextTirle='Login';
        let nextComponent;

        switch (rowData){
            case data[0]:
                nextTirle='Login';
                nextComponent=Login;
                break;
            case data[1]:
                nextTirle='Welcome';
                nextComponent=Welcome;
                break;
        }
        console.log(nextTirle);
         this.props.navigator.push({
            title: 'nextTirle',
            component:nextComponent
        })
    }

    _renderRow(rowData,sectionId,rowID){
        var imgSource=ImgList[rowID];
        return(
            <View>
                <TouchableOpacity onPress={this._openPage.bind(this)}>
                    <View style={{flexDirection:'row',paddingLeft:15,backgroundColor:'#f6f6f6'}}>
                        <Image source={imgSource} style={{height:50,width:50}}/>
                        <Text style={{flex:1,fontSize:16,color:'blue',paddingTop:15,paddingLeft:15}}>{rowData+'我是测试号哦======='}</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={ this._renderRow.bind(this)}
                   // {/*renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,sectionId,rowId)}*/}
                />
            </View>
        )
    }

}




export default Splash;