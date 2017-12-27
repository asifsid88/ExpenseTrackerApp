import React from 'react';
import { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         SectionList
        } from 'react-native';
import { List,
         ListItem,
         Header
        } from 'react-native-elements';
import {connect} from 'react-redux';
import * as Screen from '../config/screen-names';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    handleExpense = (expense) => {
        this.props.navigation.navigate(Screen.EXPENSE, {...expense});
    }

    renderItem = (row) => {
        return (
            <ListItem 
                leftIcon={<DateEmblem date={row.item.dateOfExpense} />}
                title={row.item.name} 
                subtitle={row.item.comment}
                badge={{ element : <AmountBage amount={row.item.amount} />}}
                onPress={() => this.handleExpense(row.item)}
            />
        )
    }

    renderSectionHeader = (row) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{row.section.title}</Text>
            </View>
        );
    }

    prepareSectionData = () => {
        const sectionListData = [];
        this.props.monthlyExpenses.map((monthlyExpense) => {
            const sectionData = new Object();
            sectionData.title = monthlyExpense.month;
            sectionData.data = monthlyExpense.expenses;

            sectionListData.push(sectionData);
        });

        return sectionListData;
    }

    getExpenseList = () => {
        if(this.props.monthlyExpenses != null && this.props.monthlyExpenses.length != 0) {
            return (
                <SectionList
                    sections={this.prepareSectionData()}
                    renderItem={this.renderItem.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    keyExtractor={item => item.id}
                />
            )
        } else {
            return (
                <Text>No Expenses Found</Text>
            )
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                {this.getExpenseList()}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        monthlyExpenses: state.monthlyExpenses
    }
}

class AmountBage extends Component {
    render = () => {
        return (
            <View style={styles.amountBadgeContainer}>
                <Text style={styles.amountBadgeText}>&#8377;{this.props.amount}</Text>
            </View>
        )
    }
}

class DateEmblem extends Component {

    getDateAndMonth = (date) => {
        const month = ["JAN", "FEB", "MAR", "APR", 
                        "MAY", "JUN", "JUL", "AUG", 
                        "SEP", "OCT", "NOV", "DEC"];
        const dateArr = date.split('/');
        return (
            month[dateArr[1]-1] + " " + dateArr[0]
        )
    }

    render = () => {
        const dateArr = this.getDateAndMonth(this.props.date).split(' ');

        return (
            <View style={styles.dateEmblemContainer}>
                <Text style={styles.dateEmblemText1}>{dateArr[0]}</Text>
                <Text style={styles.dateEmblemText2}>{dateArr[1]}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dateEmblemContainer: {
        width: 32,
        alignItems: 'center',
    },
    dateEmblemText1: {
        color: '#999',
        fontSize: 11,
    },
    dateEmblemText2: {
        color: '#999',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerContainer: {
        backgroundColor: '#eee',
        padding: 5,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#f6f6f6',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    headerText: {
        fontWeight: '400',
        color: '#000'
    },
    amountBadgeContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    amountBadgeText: {
        fontWeight: 'bold',
        color: '#ff652f',
        fontSize: 16,
    }
});

export default connect(mapStateToProps)(Home);