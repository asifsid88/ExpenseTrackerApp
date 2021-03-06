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
import PaymentMode from './payment-mode';

class AddExpense extends Component {

    static navigationOptions = ({navigation}) => {
        const title = (navigation.state.params !== undefined) ? navigation.state.params.name : 'Add Bill';
        return {
            headerTitle: `${title}`,
            headerBackTitle: 'Cancel'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            dateOfExpense: '',
            modeOfPayment: '',
            amount: '',
            expenseCreateDate: '',
            expenseModifiedDate: '',
            comment: ''
        }
    }

    componentDidMount() {
        if(this.props && this.props.navigation && this.props.navigation.state.params) {
            this.setState({...this.props.navigation.state.params});
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
                            onChange={(name) => this.setState({name})}
                            value={this.state.name}
                        />
                    </View>

                    <View style={styles.textInputView}>
                        <Text style={{fontSize: 24, marginRight: 5, fontWeight: 'bold'}}>{getCurrencySymbol('INR')}</Text>
                        <TextInput 
                            style={{height: 30}}
                            placeholder="Expense Amount"
                            onChange={(amount) => this.setState({amount})}
                            value={this.state.amount}
                        />
                    </View>
                </View>
            </View>
        )
    }

    getExpenseTypeAndDatePanel = () => {
        return (
            <View style={{flexDirection: 'row', marginBottom: 8, justifyContent: 'center'}}>
                <PaymentMode
                    selectedOption={this.state.modeOfPayment}
                    selectPaymentMode={this.handleSelectPaymentMode.bind(this)}
                />
                <DatePicker
                    style={{width: 150}}
                    date={this.state.dateOfExpense}
                    mode="date"
                    placeholder="Expense Date"
                    format="DD/MM/YYYY"
                    minDate="01/01/2000"
                    maxDate="01/01/2200"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(dateOfExpense) => this.setState({dateOfExpense: dateOfExpense})}
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
                    onChange={(comment) => this.setState({comment})}
                    value={this.state.comment}
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

    handleSelectPaymentMode(modeOfPayment) {
        this.setState({modeOfPayment});
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