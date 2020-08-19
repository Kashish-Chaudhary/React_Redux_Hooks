import { INCREASE_QUANTITY ,DECREASE_QUANTITY,CLEAR_QUANTITY } from './types'
export const productQuantity = (action, name) =>{
    return (dispatch) =>{
        console.log('Inside action')
        console.log("the action is ",action)
        console.log("product name is ",name)
        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}
export const clearProduct = (name) =>{
    return (dispatch) =>{
        console.log('Inside clearproduct')
        // console.log("the action is ",action)
        console.log("product name is ",name)
        dispatch({
            type: CLEAR_QUANTITY,
            payload:name
        })
    }
}