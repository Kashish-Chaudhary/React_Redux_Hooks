import {GET_NUMBERS_BASKET} from './types'
export const getNumbers = () =>{
    return (dispatch) => {
        console.log("Get all Basket Numbers");
        dispatch({
            type:GET_NUMBERS_BASKET
        })
    }
}