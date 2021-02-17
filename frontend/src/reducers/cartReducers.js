import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    SAVE_CART_SHIPPING_ADDRESS,
    SAVE_PAYMENT_CART_METHOD
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find( x => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
    
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            }
        case SAVE_CART_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case SAVE_PAYMENT_CART_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }

        default:
            return state
    }
}