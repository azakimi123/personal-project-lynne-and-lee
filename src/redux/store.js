import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    productReducer
})


export default createStore(rootReducer);


// import {createStore} from 'redux';
// import userReducer from './userReducer';

// export default createStore(userReducer);