/**
 * Created by dell on 2017/3/31.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Welcome from './Welcome';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
            age:null
        }
    }
    _openPage(){
        this.props.navigator.push({
            title:'Welcome',
            component:Welcome,
           params:{
                name:this.state.name,
               age:this.state.age,
               changeMyAge:(age)=>{
                   this.setState({age})
               }
           }
        })
    }



    render(){
        return(
            <View style={{flex:1,alignItems:'center',backgroundColor:'#ffffff'}}>
                <Text>From Page</Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={name => this.setState({name})}
                    placeholder={'Enter your name'}
                    style={{height:40,width:200}}
                />
                <Text>My age:{this.state.age ? this.state.age : 'Unknown'}</Text>
                <TouchableOpacity onPress={this._openPage.bind(this)}>
                    <Text style={{color:'blue'}}>更新年龄</Text>
                </TouchableOpacity>
            </View>
        )
    }
}










export default Login;
