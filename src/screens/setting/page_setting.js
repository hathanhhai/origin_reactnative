import React, { Component } from 'react'
import { View, Text,StatusBar } from 'react-native'

import { HeaderSingle } from '../../components/elements/header/index';
import { Container } from '../../components/elements/container/index'
class PageSetting extends Component {
    render() {
        return (
            <Container>
                <StatusBar backgroundColor='#FF4F57'></StatusBar>
                <HeaderSingle title="Setting"></HeaderSingle>
                <Text>Setting</Text>
            </Container>
        )
    }
}
export default PageSetting;