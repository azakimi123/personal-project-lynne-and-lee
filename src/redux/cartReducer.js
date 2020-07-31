const initialState = {
    cart: [],
    cartTotal:[0],
    productAmount:[]
}

const ADD_CART = 'ADD_CART';
const PLUS_ITEM = 'PLUS_ITEM';

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
                        product.amount ++
                    }
                }),
            };
        default:
            return state;
    }
}