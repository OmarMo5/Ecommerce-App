import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_FILTER_PRODUCTS } from "./Type"


const initial ={
    products:[],
    cates:[],
    filterProducts:[]
}

export const ProductsReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                cates:action.payload,
                loading:false
            }
        case GET_FILTER_PRODUCTS:
            return{
                ...state,
                filterProducts:action.payload,
                loading:false
            }
        default:
            return state;
    }
    
    
}