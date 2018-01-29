import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as burgerMenu} from 'redux-burger-menu';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    user: UserReducer,
    burgerMenu: burgerMenu,
    form: formReducer
})

export default rootReducer;