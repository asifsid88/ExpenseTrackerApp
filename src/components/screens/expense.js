import React from 'react';
import { Component } from 'react';
import { ScrollView,
         View,
         Text,
         StyleSheet
        } from 'react-native';
import { Button } from 'react-native-elements';

import { getCurrencySymbol, getVerbalDate } from '../../util';

class Expense extends Component {

    constructor(props) {
        super(props);
    }

    getButtonPanel = () => {
        return (
            <View style={{marginTop: 40}}>
                <Button
                    raised
                    icon={{name: 'mode-edit'}}
                    title='Edit Expense'
                    containerViewStyle={{marginBottom: 10}}
                    onPress={() => this.editExpense()}
                />
                <Button
                    raised
                    icon={{name: 'cancel'}}
                    title='Delete Expense'
                    backgroundColor='#b30000'
                    onPress={() => this.deleteExpense()}
                />
            </View>
        )
    }

    editExpense = () => {
        alert('edit');
    }

    deleteExpense = () => {
        alert('delete');
    }

    render = () => {
        const {
            id, name, dateOfExpense, modeOfPayment,
            amount, currency, expenseCreateDate, 
            expenseModifiedDate, comment
        } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.expenseDate}>{getVerbalDate(dateOfExpense)}</Text>
                
                <Text style={{marginTop:5}}>
                    <Text style={styles.amount}>{getCurrencySymbol(currency)}{amount}</Text>
                    <Text> was spend using </Text>
                    <Text style={{fontWeight: 'bold'}}>{modeOfPayment}</Text>
                </Text>
                
                <Text style={{marginTop: 8}}>Comment: {comment}</Text>

                <View style={{marginTop: 20}}>
                    <Text style={styles.information}>Expense is created on {getVerbalDate(expenseCreateDate)} </Text>
                    <Text style={styles.information}>Last updated on {getVerbalDate(expenseModifiedDate)} </Text>
                </View>
                
                {this.getButtonPanel()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    expenseDate: {
        marginTop: 8,
        fontSize: 16,
    },
    amount: {
        fontWeight: 'bold',
        color: '#ff652f',
        fontSize: 16,
    },
    information: {
        fontSize: 11,
        color: '#999',
        fontStyle: 'italic',
    }
});

export default Expense;