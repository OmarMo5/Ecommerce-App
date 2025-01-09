import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ProductsHook from './ProductsHook.js';
import { useDispatch, useSelector } from 'react-redux';



const Navbar = ({setData,cart}) => {
  //console.log(useLocation());
  const location = useLocation();
  const navigate = useNavigate();

  const [product] = ProductsHook();
  
  const filterByCategory = (category)=>{
    //const element = product.filter((product)=>product.category === category);
    //console.log(element);
    //setData(element);
    //console.log(element,"elem");
    if(category != "All"){
      localStorage.setItem("filter",category);
    }
    else{
      localStorage.removeItem("filter");
    }
  }


  return (
    <>
      <header className='sticky-top'>
          <div className="nav-bar">
              <Link to={'/'} className="brand">Ecommerce-App</Link>

              <Link to={'/cart'} className="cart">
                  <button type="button" className="btn btn-primary position-relative">
                    {cart.length}
                    <span>  Cards</span>
                  </button>
              </Link>
          </div>

          {
            location.pathname == '/' && (
              <div className="nav-bar-wrapper">
                <div className="items">Filter by</div>
                <div onClick={()=>filterByCategory("All")} className="items">No Filter</div>
                <div onClick={()=>filterByCategory("men's clothing")} className="items">men</div>
                <div onClick={()=>filterByCategory('jewelery')} className="items">jewelery</div>
                <div onClick={()=>filterByCategory('electronics')} className="items">electronics</div>
                <div onClick={()=>filterByCategory("women's clothing")} className="items">women</div>
              </div>
            )
          } 

      </header>
    </>
  )
}

export default Navbar