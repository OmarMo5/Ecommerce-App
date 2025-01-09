import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from './API/GetData.js';

export default function ProductsHook() {
    
     // get all Products
    const dispatch=useDispatch();
    const run=async()=>{
        await dispatch(getAllProductsAction());
    }      

    const [cate, setCate] = useState(localStorage.getItem("filter")||"");

    useEffect(() => {
        run();
        console.log(cate,"cateeee"); 
    },[cate]);


    useEffect(()=>{
        if(!localStorage.getItem("filter")){
            run();
        }
    },[localStorage.getItem("filter")]);

    const AllProducts=useSelector(state=> state.products);
    let products=[];
    try {
        /* if(AllProducts){ */
            products=[...AllProducts.data];
            /* if(localStorage.getItem("filter")){
                let category = localStorage.getItem("filter");
                const element = products.filter((product)=>product.category === category);
                products=[...element];
            }
            else{
                products=[...AllProducts.data];
            }  */ 
/*         }
 */    } catch (error) {
        console.log(error);
    }
    return [products];
}