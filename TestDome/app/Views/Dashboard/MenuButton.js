/**
 * Created by dell on 2017/4/11.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    PropTypes,
    StyleSheet
} from 'react-native';

export default class MenuButton extends Component{

  static propTypes={
      renderIcon:React.PropTypes.number.isRequired,
      showText:React.PropTypes.string,
      tag:React.PropTypes.string,
      onClick:React.PropTypes.func

  };
    constructor(props){
        super(props);
        this._onClick=this._onClick.bind(this);
    }
   _onClick(){
       if(this.props.onClick){
           this.props.onClick(this.props.showText,this.props.tag);    //回调Title和Tag
       }
   }
    render(){
        return(
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View  style={{flex:1,alignItems:'center',height:60}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={{fontSize:12}}>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    }
});
