/**
 * Created by dell on 2017/4/5.
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
    TouchableHighlight
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
const TextList=[
    '新闻1',
    '新闻2',
    '新闻3',
    '新闻4',
    '新闻5',
    '新闻6',
    '新闻7',
    '新闻8',
    '新闻9',
    '新闻10',

];

class ListViewText extends Component{
    constructor(props){
        super(props);
        var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state={
            dataSource:ds.cloneWithRows(TextList)
        }
    }

    _renderRow(rowData:string,sectionID:number,rowID:number){
        var imgSource=ImgList[rowID];
        return(
            <TouchableHighlight>

                <View style={styles.row}>
                    <Image style={{width:45,height:45}} source={imgSource}/>
                    <Text style={styles.text}>{rowData}</Text>
                </View>

            </TouchableHighlight>
        )
    }
    render(){
        return(
            <ListView
                initialListSize={10}
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,sectionId,rowId)}
            />
        )
    }
}


var styles=StyleSheet.create({
    list: {
        marginTop:20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        // justifyContent: 'space-around',
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 17.3,
        width: 85,
        height: 85,
        backgroundColor: 'red',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
});

AppRegistry.registerComponent('AppProject',()=>ListViewText);