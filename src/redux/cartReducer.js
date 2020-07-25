const initialState = {
    cart: [],
    cartTotal:[0]
}

const ADD_CART = 'ADD_CART';


export function addToCart(prodObj){
    return {
        type: ADD_CART,
        payload: prodObj
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case ADD_CART:
            return {...state, cart: payload};
        default:
            return state;
    }
}