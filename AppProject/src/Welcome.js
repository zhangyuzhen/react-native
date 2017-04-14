/**
 * Created by dell on 2017/3/31.
 */
import React, {Component} from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class Welcome extends React.Component {
    _back() {
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <Text>{this.props.age}</Text>
                <Text>Welcome to Navigation! {this.props.name}</Text>
                <TextInput
                    onChangeText={age => this.props.changeMyAge(age) }
                    placeholder={'Enter your age:'}
                    style={{ height: 40, width: 200 }} />
                <TouchableOpacity onPress={this._back.bind(this)}>
                    <Text style={{ color: '#55ACEE' }}>Save my age</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Welcome;
