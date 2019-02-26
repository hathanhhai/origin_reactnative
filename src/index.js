import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { addNavigationHelpers } from 'react-navigation'
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/'
import App from './App';

import Router from './navigation/routers'

const store = createStore(Reducer, applyMiddleware(thunk));



export default class Index extends Component {
    render() {
        return (

            <Provider store={store}>
                
                <App></App>
            </Provider>

        );
    }
}

