import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartreducer";

const persistConfig = {
    key:'food-paradise',
    storage,
    whitelist:['cart'],
}

const appReducer = combineReducers({
    cart: cartReducer,
})

export default persistReducer(persistConfig, appReducer)