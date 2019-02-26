import React from 'react'

import { View, Image, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native'

import styles from './styles';


const HeaderSingle = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
        <Text style={styles.titleSingle}>{title}</Text>
    </View>
  )

};



export default HeaderSingle;