import {createStackNavigator, createBottomTabNavigator, TabNavigator} from 'react-navigation'

import React from 'react';
import {View, Text, Image} from 'react-native'
import PageHome from '../screens/homes/page_home';
import PageHotJob from '../screens/Job/page_job_hot';
import PageSetting from '../screens/setting/page_setting';

import PageApply from '../screens/applies/page_apply';


const HomeStack = createStackNavigator({
        home_screen: {
            screen: PageHome,
            navigationOptions: {
                header: null,
            }

        }
    },
)


const HotScreen = createStackNavigator({
        hot_screen: {
            screen: PageHotJob,
            navigationOptions: {
                header: null,
            }
        }

    },
)


const SettingScreen = createStackNavigator({
        setting_screen: {
            screen: PageSetting,


        }
    },
    {
        headerMode: 'none',
    }
);

const ApplyScreen = createStackNavigator({
        apply_screen: {
            screen: PageApply,


        }
    },
    {
        headerMode: 'none',
    }
);


const Router = createBottomTabNavigator({
        tab_home: {
            screen: HomeStack,
            navigationOptions: {
                title: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Image style={{width: 22, height: 22, tintColor: tintColor}}
                           source={require('../resources/images/icon/home.png')}></Image>
                )
            }
        },
        tab_hot: {
            screen: HotScreen,
            navigationOptions: {
                title: 'Hot',
                tabBarIcon: ({tintColor}) => (
                    <Image style={{width: 22, height: 22, tintColor: tintColor}}
                           source={require('../resources/images/icon/7.png')}></Image>
                )
            }
        },
        tab_apply: {
            screen: ApplyScreen,
            navigationOptions: {

                title: 'Applied',
                tabBarIcon: ({tintColor}) => (
                    <Image style={{width: 22, height: 22, tintColor: tintColor}}
                           source={require('../resources/images/icon/apply.png')}></Image>
                )
            }
        },
        tab_setting: {
            screen: SettingScreen,
            navigationOptions: {
                title: 'More',
                tabBarIcon: ({tintColor}) => (
                    <Image style={{width: 22, height: 22, tintColor: tintColor}}
                           source={require('../resources/images/icon/more.png')}></Image>
                )
            }
        }
    },
    {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {

            showIcon: true,
            activeTintColor: '#FF4F57',
        },
    })


export default Router;

