
import { CartActionTypes } from './cartactionTypes';



const INITIAL_STATE={
    cartItem:[]
}

const cartReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActionTypes.CART_ADD_ITEM:
            return{
                ...state,
                cartItem:addItemToCart(state.cartItems,action.payload)
            }
            case CartActionTypes.CART_REMOVE_ITEM:
                return{
                    ...state,
                cartItem : removeItemFromCart(state.cartItems,action.payload)
                }
                default:
                    return state;
    }

}

export default cartReducer;