const initialState = {
    cart: [],
    cartTotal:[0],
    productAmount:[]
}

const ADD_CART = 'ADD_CART';
const PLUS_ITEM = 'PLUS_ITEM';
const MINUS_ITEM = 'MINUS_ITEM';

export function addToCart(prodObj){
    return {
        type: ADD_CART,
        payload: prodObj
    }
}

export function plusItem(id) {
    return {
        type: PLUS_ITEM,
        payload: id
    }
}

export function minusItem(id) {
    return {
        type: MINUS_ITEM,
        payload: id
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case ADD_CART:
            return {...state, cart: payload};
        case PLUS_ITEM:
            return {
                ...state, 
                cart: state.cart.map(product => {
                    if (product.id === payload) {
                        return {...product, amount: product.amount += 1}
                    } else {
                        return product}
                }),
            };
        case MINUS_ITEM:
            return {
                ...state, 
                cart: state.cart.map(product => {
                    if (product.id === payload) {
                        return {...product, amount: product.amount -= 1}
                    } else {
                        return product}
                }),
            };
        default:
            return state;
    }
}