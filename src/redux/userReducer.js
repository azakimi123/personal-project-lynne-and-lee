const initialState = {
    user:{},
    loggedIn: false
}

const GET_USER = 'GET_USER';
const LOGGED_IN = 'LOGGED_IN';
const CLEAR_USER = 'CLEAR_USER';


export function getUser(userObj) {
    return {
        type:GET_USER,
        payload: userObj
    }
}

export function toggle(input) {
    return {
        type:LOGGED_IN,
        payload: input
    }
}

export function clearUser() {
    return {
        type:CLEAR_USER,
        payload: {}
    }
}




export default function reducer(state = initialState, action) {
    const{type, payload} = action;
    switch(type) {
        case GET_USER:
            return {...state, user: payload};
        case LOGGED_IN:
            return {...state, loggedIn: payload};
        case CLEAR_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}