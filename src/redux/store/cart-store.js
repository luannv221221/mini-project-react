import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducer/cart-reducer";

const rootReducer = combineReducers(
    {
        cart:cartReducer
    }
)
export const store = createStore(rootReducer);