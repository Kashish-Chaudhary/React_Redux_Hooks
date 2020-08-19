import {ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET,INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_QUANTITY} from '../actions/types'
const initialState = {
    basketNumbers: 0,
    cartCost:0,
    products:{
        Bread:{
            name:'Bread',
            price:15.00,
            number:0,
            inCart:false,
            tagName:'Bread'
        },
         Cake:{
            name:'Cake',
            price:15.00,
            number:0,
            inCart:false,
            tagName:'Cake'
        },
        Dounut:{
            name:'Dounut',
            price:15.00,
            number:0,
            inCart:false,
            tagName:'Dounut'
            },
        Muffin:{
            name:'Muffin',
            price:15.00,
            number:0,
            inCart:false,
            tagName:'Muffin'
        },

    }
}
export default (state=initialState,action) =>{
    let productSelected = "";
    switch(action.type){
        case ADD_PRODUCT_BASKET:{
             productSelected = {...state.products[action.payload]}
            productSelected.inCart = true;
            productSelected.number+=1;
            
            
            console.log(state)
            return {
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost+state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:productSelected

                }
                
            }
        }
        case GET_NUMBERS_BASKET:{
            return {
                ...state,
            }
        }
        case INCREASE_QUANTITY:{
             productSelected = {...state.products[action.payload]}
            productSelected.number+=1;
            console.log(action.payload);
            
            
            return {
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost+state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
        }
        case DECREASE_QUANTITY:{
            let productSelected = {...state.products[action.payload]}
            let newCartCost = 0;
            let newBasketNumber=0;
            if(productSelected.number === 0){
                productSelected.number=0;
                newCartCost = state.cartCost;
                newBasketNumber=state.basketNumbers
            }
            else{
            productSelected.number-=1;
            newCartCost=state.cartCost-state.products[action.payload].price
            newBasketNumber=state.basketNumbers-1;
            }
            
            console.log(action.payload);
            
            
            return {
                ...state,
                cartCost:newCartCost,
                basketNumbers:newBasketNumber,
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
            
            
        }
        case CLEAR_QUANTITY:{
            let productSelected = {...state.products[action.payload]}
                productSelected.number=0;
                productSelected.inCart=false
            
            console.log(action.payload);
            
            
            return {
                ...state,
                basketNumbers:state.basketNumbers-state.products[action.payload].number,
                cartCost:state.cartCost-(state.products[action.payload].price*state.products[action.payload].number),
                products:{
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
            
            
        }
        
        default:
            return state;
    }
}