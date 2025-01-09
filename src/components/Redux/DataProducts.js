import { GET_ALL_PRODUCTS } from "./Type"


const initial ={
    products:[],
    specificProduct:[],
    productsByCategory:[]
}

export const ProductsReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        default:
            return state;
    }
}