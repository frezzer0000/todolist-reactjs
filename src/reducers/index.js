import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types'
import Items from '../mockData/Item';
import _ from 'lodash'
const initialState = {
    Items
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_ITEM:
            return state.Items
        case actionTypes.DELETE_ITEM:
            return _.filter(state, item => {
                return item.id !== action.payload.id
            })
        default:
            return state.Items
    }
}

const rootReducers = combineReducers({
    item: todo
})

export default rootReducers;