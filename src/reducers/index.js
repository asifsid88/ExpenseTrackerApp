import {combineReducers} from 'redux';
import ExpenseReducer from './reducers-expenses';
import MonthlyExpenseReducer from './reducers-monthly-expenses';

const allReducers = combineReducers({
  expenses: ExpenseReducer,
  monthlyExpenses: MonthlyExpenseReducer
})

export default allReducers;