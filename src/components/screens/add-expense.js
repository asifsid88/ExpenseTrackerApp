import React from 'react';
import { Component } from 'react';
import { View,
         Text,
         StyleSheet
        } from 'react-native';

class AddExpense extends Component {
    render = () => {
        return (
            <View style={styles.container}>
                <Text>Add New Expense</Text>
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

export default AddExpense;