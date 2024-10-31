import { combineReducers, createStore } from 'redux';
import cartReducer from '../reducers/cartReducer';
import wishlishReducer from '../reducers/wishlishReducer';

const rootReducer = combineReducers({
    cart : cartReducer,
    wishlist : wishlishReducer
})

export const store = createStore(rootReducer);
