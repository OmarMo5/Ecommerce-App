import axios from "axios";
import {GET_ALL_PRODUCTS, Get_Error} from '../Redux/Type.js';

const getAllProductsAction =  ()=> async (dispatch)=>{
    try{
        const response=await axios.get('https://fakestoreapi.com/products');
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

export default getAllProductsAction;