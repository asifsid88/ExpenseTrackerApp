import React from 'react';
import { Component } from 'react';
import { View,
         Text,
         StyleSheet
        } from 'react-native';

class Expense extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Expense</Text>
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

export default Expense;