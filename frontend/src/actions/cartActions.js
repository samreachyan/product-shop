import axios from 'axios'
import { ADD_CART_ITEM , REMOVE_CART_ITEM, SAVE_CART_SHIPPING_ADDRESS, SAVE_PAYMENT_CART_METHOD } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
  
    dispatch({
      type: ADD_CART_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_CART_SHIPPING_ADDRESS,
    payload: data
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: SAVE_PAYMENT_CART_METHOD,
    payload: data
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
