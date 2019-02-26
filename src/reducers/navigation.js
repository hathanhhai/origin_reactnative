import {NavigationActions} from 'react-navigation'
import Router from '../navigation/routers';

const initialState = Router.router.getStateForAction(NavigationActions.init());

export default (state=initialState,action)=>{
    const nextState = Router.router.getStateForAction(action);
    return nextState || state;
}



