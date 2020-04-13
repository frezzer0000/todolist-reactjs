import * as actionTypes from '../actions/types'
import Items from '../mockData/Item';
import _ from 'lodash';
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
            console.log(state)
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
                            level : action.payload.levelEdit
                        }     
                    };
                    return i;
                })
            }
        // console.log("debug: handleItem -> Items", Items)
        default:
            return state;
    }
    // console.log("debug: handleItem -> Items", Items)
}
export default handleItem;