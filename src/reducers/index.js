import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveReducer from './reducer-active-user';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveReducer
})

export default allReducers;
