import 'babel-polyfill';
import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import reduxMulti from 'redux-multi';
import allReducers from './src/reducers';
import App from './App';

const loggerMiddleware = createLogger();

const store = createStore(
                allReducers,
                applyMiddleware(
                    thunkMiddleware,
                    reduxMulti,
                    loggerMiddleware
                )
              );

const getApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('ExpenseTrackerApp', () => getApp);
