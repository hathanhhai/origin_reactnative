import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Container } from '../../components/elements/container/index'
import { Header } from '../../components/elements/header/index';
export default class PageHome extends Component {

    handleOnPressSearch = () => {
        console.log('search');
    }
    handleOnPressMenu = () => {
        console.log('menu');
    }
    handleOnPressUser = () => {
        console.log('user');
    }


    render() {

        return (


            <Container>
                {/* <JobDetail></JobDetail> */}
                <StatusBar backgroundColor='#FF4F57'></StatusBar>
                <Header onPressSearch={this.handleOnPressSearch} onPressMenu={this.handleOnPressMenu} onPressUser={this.handleOnPressUser} ></Header>

                <Text>Home</Text>
            </Container>

        )
    }
}
