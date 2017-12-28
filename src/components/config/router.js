import React from 'react';
import { Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/home';
import Profile from '../screens/profile';
import AddExpense from '../screens/add-expense';
import Expense from '../screens/expense';

export const ExpenseStack = StackNavigator({
    AllExpenses: {
        screen: Home,
        navigationOptions: {
            title: 'All Expenses'
        }
    },
    Expense: {
        screen: Expense,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}`,
            headerRight: <Text style={{marginRight: 10}} onPress={() => {alert('Hi')}}>Edit</Text>
        })
    }
})

export const Tabs = TabNavigator({
    Home: {
        screen: ExpenseStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />  
        }
    },
    AddExpense: {
        screen: AddExpense,
        navigationOptions: {
            tabBarLabel: 'Add Expense',
            tabBarIcon: ({ tintColor }) => <Icon name="add-circle-outline" size={35} color={tintColor} />  
        }
    }, 
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />            
        }
    }
});