import React, { Component } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { Container } from '../../components/elements/container/index'
import { HeaderSingle } from '../../components/elements/header/index';
export default class PageApply extends Component {


    render() {
        return (
            <Container>
                <StatusBar backgroundColor='#FF4F57'></StatusBar>
                <HeaderSingle title="Applied"></HeaderSingle>
                <Text>Account</Text>
            </Container>
        )
    }
}
