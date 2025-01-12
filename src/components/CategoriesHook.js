import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAllProductsAction, getAllProductsFilterAction, getCategoriesAction} from './API/GetData.js';

export default function CategoriesHook() {
    
     // get all Products
    const dispatch=useDispatch();
    const run=async()=>{
            await dispatch(getCategoriesAction());   
    }      

    useEffect(()=>{
        run();
    },[]);


    const AllCates=useSelector(state=> state.cates);
    let Cates=[];
    try {
        Cates=[...AllCates.data]; 
    } catch (error) {
        console.log(error);
    }
    return [Cates];
}