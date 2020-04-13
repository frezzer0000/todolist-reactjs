import { combineReducers } from 'redux';
import handleItem from './handleReducer';

export default combineReducers({
    handleItem: handleItem,
});