import * as typesActions from './types'

export const listItem = () => {
    return {
        type: typesActions.LIST_ITEM
    }
}
export const deleteItem = (id) => {
    return {
        type: typesActions.DELETE_ITEM,
        payload: id,
    }
}
export const editItem = (payload) => {
    return {
        type: typesActions.EDIT_ITEM,
        payload,
    }
}
export const addItem = (payload) => {
    // console.log("debug: addItem -> payload", payload)
    return {
        type: typesActions.ADD_ITEM,
        payload,
    }
}






