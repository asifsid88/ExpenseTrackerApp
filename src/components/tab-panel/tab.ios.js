import React from 'react';
import {Component} from 'react';
import {
        TabBarIOS,
        StyleSheet
        } from 'react-native';
import * as Images from '../../assets/index';
import Home from '../views/home';
import AddExpense from '../views/add-expense';
import Profile from '../views/profile';

class Tab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    handleTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'home'}
                    onPress={() => this.handleTab('home')}
                    title='Home'
                    icon={{scale: 20, uri: Images.ICON_HOME}}
                >
                    <Home />
                </TabBarIOS.Item>
                
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'add-expense'}
                    onPress={() => this.handleTab('add-expense')}
                    title='Add Expense'
                    icon={{scale: 2, uri: Images.ICON_PLUS_SYMBOL}}
                >
                    <AddExpense />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'profile'}
                    onPress={() => this.handleTab('profile')}
                    title='Profile'
                    icon={{scale: 20, uri: Images.ICON_PROFILE}}
                >
                    <Profile />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}


export default Tab;