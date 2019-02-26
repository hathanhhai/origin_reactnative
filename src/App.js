import React, { Component } from 'react';


import EStyleSheet from 'react-native-extended-stylesheet';

import Router from './navigation/routers'

EStyleSheet.build({
    $primaryColor: '#FF4F57',

    // '$outline':'black'


})
// RN >= 0.52
import { YellowBox } from 'react-native';
console.disableYellowBox = true;


export default class App extends Component {

    render() {
        return (
          
            <Router>
            </Router>
            
        );
    }
}

