import {combineReducers} from 'redux';
import * as actionTypes from '../actions/types'
import Items from '../mockData/Item';
const initialState = {
    Items
}

const listItem = (state =initialState, action ) => {
    return state.Items
    }


const rootReducers = combineReducers ({
    item: listItem
})

export default rootReducers;