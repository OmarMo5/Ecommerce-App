import { createStore , applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import { ProductsReducer } from "./DataProducts.js";


const initialState={};
const middleware=[thunk];
export const store = createStore(ProductsReducer,initialState,applyMiddleware(...middleware));

