import React from 'react'
import PropTypes from 'prop-types';
import { View, Image, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native'

import styles from './styles';


const Header = (props) => {
  const { onPressSearch, onPressMenu, onPressUser } = props;
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.menuIcon} onPress={onPressMenu}>

        <Image resizeMode="contain" style={styles.iconImage} source={require('../../../resources/images/icon/menu.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewInput} onPress={onPressSearch}>
        <Image resizeMode="contain" style={styles.iconSearch} source={require('../../../resources/images/icon/search.png')}></Image>
        <Text style={{ color: '#95a5a6' }}>Tìm kiếm công việc ...</Text>
        {/* <TextInput underlineColorAndroid='transparent' style={styles.inputSearch}  {...props}></TextInput> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuIcon} onPress={onPressUser}>
        <Image resizeMode="contain" style={styles.iconImage} source={require('../../../resources/images/icon/user.png')}></Image>
      </TouchableOpacity>

    </View>
  )

};



export default Header;