import * as typesActions from './types'

// export const listItem = () => {
//     return {
//         type: typesActions.LIST_ITEM
//     }
// }

export const deleteItems = (item) => {
    return {
        type: typesActions.DELETE_ITEM,
        payload: item
    }
}

