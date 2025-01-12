import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ProductsHook from './ProductsHook.js';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesHook from './CategoriesHook.js';


const Navbar = ({setData,cart}) => {

  const [products,run] = ProductsHook();
  const [Cates]=CategoriesHook();
  //console.log(useLocation());
  const location = useLocation();
  const navigate = useNavigate();
  
  const filterByCategory = (category)=>{
    if(category != "All"){
      localStorage.setItem("filter",category);
    }
    else{
      localStorage.removeItem("filter");
    }
    run();
  }

  return (
    <>
      <header className='sticky-top'>
          <div className="nav-bar">
              <Link to={'/'} className="brand">Ecommerce-App</Link>

              <Link to={'/cart'} className="cart">
                  <button type="button" className="btn btn-primary position-relative">
                    {cart.length}
                    <span>  Cart</span>
                  </button>
              </Link>
          </div>

          {
            location.pathname == '/' && (
              <div className="nav-bar-wrapper" style={{display:"flex",justifyContent:"space-around",
                                                      flexWrap:"wrap"}}>
                <div className="items">Filter by</div>
                <div onClick={()=>filterByCategory("All")} className="items" style={{marginLeft:"20px"}}>All Product</div>

                  {
                    Cates&&Cates.slice(0,5).map((cate)=>{
                      return(
                        <div style={{marginLeft:"20px"}} onClick={()=>filterByCategory(cate.id)} className="items">
                          {cate.name}
                        </div>

                      )
                    })
                  }

              </div>
            )
          } 

      </header>
    </>
  )
}

export default Navbar