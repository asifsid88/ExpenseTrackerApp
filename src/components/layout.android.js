import React from 'react';
import {Component} from 'react';
import {View, 
        Text,
        StyleSheet
    } from 'react-native';
import Tabs from './router';

class Layout extends Component {
    render() {
        return (
            <Tabs />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Layout;