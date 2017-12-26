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

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=50`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
      };

    getExpenseList() {
        if(this.props.expenses != null && this.props.expenses.length != 0) {
            return (
                <List>
                    <FlatList
                        data={this.props.expenses}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.name}
                                subtitle={item.modeOfPayment}
                            />
                        )}
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
    }
});

export default connect(mapStateToProps)(Home);