import React from 'react';
import {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        FlatList
        } from 'react-native';
import {List,
        ListItem} from 'react-native-elements';
import {connect} from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    getExpenseList() {
        if(this.props.expenses != null && this.props.expenses.length != 0) {
            return (
                <List>
                    <FlatList
                        data={this.props.expenses}
                        renderItem={({item}) => {
                            <ListItem
                                title={item.name}
                                subtitle={item.modeOfPayment}
                            />
                        }}
                    />
                </List>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>No Expenses Found</Text>
                </View>
            )
        }
    }

    render() {
        return this.getExpenseList()
    }
}

function mapStateToProps(state) {
    return {
        expenses: state.expenses
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapStateToProps)(Home);