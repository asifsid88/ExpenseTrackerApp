import {combineReducers} from 'redux';
import ExpenseReducer from './reducers-expenses';

const allReducers = combineReducers({
  expenses: ExpenseReducer
})

export default allReducers;