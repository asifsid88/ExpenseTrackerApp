import React from 'react';
import {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        SectionList
        } from 'react-native';
import {List,
        ListItem,
        Header
        } from 'react-native-elements';
import {connect} from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    renderItem = (row) => {
        return (
            <ListItem title={row.item.name} />
        );
    }

    renderSectionHeader = (row) => {
        return (
            <View style={styles.header}>
                <Text>{row.section.title}</Text>
            </View>
        );
    }

    getExpenseList = () => {
        if(this.props.expenses != null && this.props.expenses.length != 0) {
            const sectionListData = [
                { data: this.props.expenses, title: "Heading goes here1" },
                { data: this.props.expenses, title: "Heading goes here2" },
                { data: this.props.expenses, title: "Heading goes here3" },
                { data: this.props.expenses, title: "Heading goes here4" },
                { data: this.props.expenses, title: "Heading goes here5" },
                { data: this.props.expenses, title: "Heading goes here6" },
                { data: this.props.expenses, title: "Heading goes here7" },
                { data: this.props.expenses, title: "Heading goes here8" },
                { data: this.props.expenses, title: "Heading goes here9" },
                { data: this.props.expenses, title: "Heading goes here10" },
                { data: this.props.expenses, title: "Heading goes here11" },
                { data: this.props.expenses, title: "Heading goes here12" },
                { data: this.props.expenses, title: "Heading goes here13" }
            ];

            return (
                <List>
                    <SectionList
                        sections={sectionListData}
                        renderItem={this.renderItem.bind(this)}
                        renderSectionHeader={this.renderSectionHeader.bind(this)}
                        keyExtractor={item => item.id}
                    />
                </List>
            )
        } else {
            return (
                <Text>No Expenses Found</Text>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getExpenseList()}
            </View>
        )
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
    },
    header: {
        backgroundColor: '#a0a0a0',
        padding: 5,
    }
});

export default connect(mapStateToProps)(Home);