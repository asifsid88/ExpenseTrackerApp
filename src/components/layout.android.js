import React from 'react';
import {Component} from 'react';
import {View, 
        Text,
        StyleSheet} from 'react-native';

class Layout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Android Layout
                </Text>
            </View>
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