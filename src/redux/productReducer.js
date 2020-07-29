const initialState = {
    edit: false
}


const IS_EDITING = 'IS_EDITING';

export function isEditing(value) {
    return {
        type: IS_EDITING,
        payload: value
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case IS_EDITING:
            return {...state, edit: payload};
        default:
            return state;
    }
}

