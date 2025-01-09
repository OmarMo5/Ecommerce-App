import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAllProductsAction, getAllProductsFilterAction} from './API/GetData.js';

export default function ProductsHook() {
    
     // get all Products
    const dispatch=useDispatch();
    const [value,setValue]=useState();
    const run=async()=>{
        if(localStorage.getItem("filter")){
            let name=localStorage.getItem("filter");
            setValue(name)
            await dispatch(getAllProductsFilterAction(parseInt(name)));

        }else{
            await dispatch(getAllProductsAction());

        }
    }      



    useEffect(()=>{
        run();
},[]);

    useEffect(()=>{
            run();
    },[value]);
    const AllProducts=useSelector(state=> state.products);
    const AllProductsFilter=useSelector(state=> state.filterProducts);
    let products=[];
    try {
        if(localStorage.getItem("filter")){
            products=[...AllProductsFilter.data];
            console.log(products);
        }else{
            products=[...AllProducts.data]; 

        }
    } catch (error) {
        console.log(error);
    }
    return [products,run];
}