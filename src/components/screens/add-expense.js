import React from 'react';
import { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         TextInput,
         TouchableOpacity
        } from 'react-native';
import { Icon, 
         Button
        } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { NavigationActions } from 'react-navigation'

import { getCurrencySymbol } from '../../util';
import ExpenseType from './expense-type';

class AddExpense extends Component {

    static navigationOptions = ({navigation}) => {
        console.log('===========================================');
        console.log('params: ' + JSON.stringify(navigation));
        const name = (navigation.state.params !== undefined) ? "Mil gaya params :D" : "No param :(";

        return {
            headerTitle: `${name}`,
            headerLeft: (
                <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={() => {
                        navigation.dispatch(NavigationActions.back());                      
                    }}
                >
                    <Text 
                        style={{color: '#037aff', fontWeight: '500', fontSize: 18}}
                        numberOfLines={1}
                    >Cancel</Text>
                </TouchableOpacity>
            ),
            headerBackTitle: 'Cancel'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            expenseType: 'Cash'
        }
    }

    getTopPanel = () => {
        return (
            <View style={styles.panelContainer}>
                <View style={{flex: 1}}>
                    <Icon 
                        name="receipt"
                        size={100}
                    />
                </View>

                <View style={{flex: 2}}>
                    <View style={styles.textInputView}>
                        <TextInput 
                            style={{height: 30}}
                            placeholder="Enter Expense Title"
                        />
                    </View>

                    <View style={styles.textInputView}>
                        <Text style={{fontSize: 24, marginRight: 5, fontWeight: 'bold'}}>{getCurrencySymbol('INR')}</Text>
                        <TextInput 
                            style={{height: 30}}
                            placeholder="Expense Amount"
                        />
                    </View>
                </View>
            </View>
        )
    }

    getExpenseTypeAndDatePanel = () => {
        return (
            <View style={{flexDirection: 'row', marginBottom: 8, justifyContent: 'center'}}>
                <ExpenseType />
                <DatePicker
                    style={{width: 150}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Expense Date"
                    format="DD/MM/YYYY"
                    minDate="01/01/2000"
                    maxDate="01/01/2200"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => this.setState({date: date})}
                />
            </View>
        )
    }

    getCommentPanel = () => {
        return (
            <View style={styles.panelContainer}>
                <TextInput 
                    multiline={true}
                    width='100%'
                    numberOfLines={3}
                    borderStyle='dashed'
                    borderWidth={1}
                    style={{padding: 5}}
                    placeholder="Enter description here . . ."
                />
            </View>
        )
    }

    getButtonLayout = () => {
        return (
            <View>
                <Button
                    raised
                    title='Save'
                    icon={{name: 'done'}}
                    backgroundColor='#ff5216'
                    onPress={() => { alert('Saving...'); }}
                />    
            </View>
        )
    }

    render = () => {
        return (
            <View style={styles.container}>
                {this.getTopPanel()}
                {this.getExpenseTypeAndDatePanel()}
                {this.getCommentPanel()}
                {this.getButtonLayout()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    panelContainer: {
        flex: 1, 
        flexDirection: 'row', 
        maxHeight: 100,
        height: 30,
        marginBottom: 10,
    },
    textInputView: {
        flexDirection: 'row',
        height: 32,
        borderWidth: 1,
        paddingLeft: 3,
        paddingRight: 3,
        borderStyle: 'dashed',
        width: '90%',
        marginBottom: 8,
        marginTop: 8
    },
});

export default AddExpense;