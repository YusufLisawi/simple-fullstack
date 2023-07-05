import {configureStore} from '@reduxjs/toolkit';
import employeReducer from './employeSlice';

const store = configureStore({
	reducer : employeReducer
})

export default store;