
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


export default EStyleSheet.create({
    container: {
        backgroundColor: '$primaryColor',
        height: height / 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewInput: {
        width: width / 5,
        height: height / 18,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,


        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2,
    },
    iconSearch: {
        width: 28,
        height: 23,
        marginHorizontal: 5
    },
    inputSearch: {
        height: height,
        color: '#bdc3cc',

    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    menuIcon: {
        marginHorizontal: 15,
        justifyContent: 'center'
    },
    iconImage: {

        width: 28,
        height: 25,
    },
    titleSingle: {
        color: 'white',
        fontSize: 21
    }
})