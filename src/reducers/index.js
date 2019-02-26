import { combineReducers } from 'redux';
import recruitment from './recruitment'
import nav from './navigation';
const Reducer = combineReducers({
    recruitment,
    nav
});

export default Reducer;