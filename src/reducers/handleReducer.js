import * as actionTypes from '../actions/types'
import Items from '../mockData/Item';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    Items
}

const handleItem = (state = initialState, action) => {
    // console.log("debug: handleItem -> action", Items)
    switch (action.type) {
        case actionTypes.LIST_ITEM:
            return {
                ...state.Items
            }
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                Items: state.Items.filter((i) => i.id !== action.payload)
            }
        case actionTypes.EDIT_ITEM:
            return {
                ...state,
                Items: state.Items.map(i => {
                    if (i.id === action.payload.idEdit) {
                        // i.name = action.payload.nameEdit
                        // i.level = action.payload.levelEdit 
                        return {
                            ...i,
                            name: action.payload.nameEdit,
                            level: action.payload.levelEdit
                        }
                    };
                    return i;
                })
            }
        case actionTypes.ADD_ITEM:
            console.log("debug: handleItem -> Items", Items)
            const newPayload = {
                id: uuidv4(),
                name : action.payload.nameAdd,
                level: action.payload.levelAdd
            }
            return {
                ...state,
                Items: [
                    ...state.Items,
                    newPayload
                ]
            }
        default:
            return state;
    }
    // console.log("debug: handleItem -> Items", Items)
}
export default handleItem;