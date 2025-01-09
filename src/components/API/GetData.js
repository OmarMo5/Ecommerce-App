import axios from "axios";
import {GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_FILTER_PRODUCTS, Get_Error} from '../Redux/Type.js';

const getAllProductsAction =  ()=> async (dispatch)=>{
    try{
        const response=await axios.get('https://api.escuelajs.co/api/v1/products');
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

const getCategoriesAction =  ()=> async (dispatch)=>{
    try{
        const response=await axios.get('https://api.escuelajs.co/api/v1/categories/');
        dispatch({
            type:GET_ALL_CATEGORIES,
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
const getAllProductsFilterAction =  (id)=> async (dispatch)=>{
    try{
        const response=await axios.get(`https://api.escuelajs.co/api/v1/products?categoryId=${id}`);
        dispatch({
            type:GET_FILTER_PRODUCTS,
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

export  {getAllProductsAction,getAllProductsFilterAction,getCategoriesAction};