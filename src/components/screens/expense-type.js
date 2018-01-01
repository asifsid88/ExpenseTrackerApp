import React from 'react';
import { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity
        } from 'react-native';
import SimplePicker from 'react-native-simple-picker';

class ExpenseType extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        const options = ['Cash', 'Credit Card', 'Debit Card', 'NetBanking', 'Paytm', 'Amazon Pay', 'Other Wallet'];
        
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.label}
                    onPress={() => {
                        this.refs.picker.show();
                    }}
                >
                    <Text 
                        style={styles.text}
                        numberOfLines={1}
                    >{this.props.selectedOption || "Select Expense Type"}</Text>
                </TouchableOpacity>
                
                <SimplePicker
                    ref={'picker'}
                    options={options}
                    onSubmit={(option) => this.props.selectPaymentMode(option)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    label: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 1, 
        borderColor: '#000',
        borderStyle: 'dashed',
        marginRight: 15,
        width: 190
    },
    text: {
//        color: '#c7c7cd',
        maxWidth: 190,
    }
});

export default ExpenseType;