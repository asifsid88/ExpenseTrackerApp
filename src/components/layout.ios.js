import React from 'react';
import {Component} from 'react';
import {View, 
        Text,
        StyleSheet
    } from 'react-native';
import TabPanel from './tab-panel/tab';

class Layout extends Component {
    render() {
        return (
            <TabPanel />
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