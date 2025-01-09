import React from 'react'
import { Link } from 'react-router-dom'
import ProductsHook from './ProductsHook';

const Cart = ({cart,setCart}) => {
  const [products] = ProductsHook();
  //console.log(products);
  return (
    <>
    <div className="container sh my-5 " style={{width:"54%"}}>
      {
        cart.length==0 ?(
            <>
            <div className='text-center' style={{marginBottom:"36%"}}>
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
            </div>
            </>
        ):
        cart.map((product)=>{
          return(
            <>
            <div className="container card mb-3 my-5">
              <div className="row g-0">
                  <div className="col-lg-4 col-md-4 col-xs-3">
                      <img src={product.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-lg-6 col-md-4 col-xs-4">
                      <div className="card-body text-center">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <button className="btn btn-primary mx-3">
                              {product.price} $
                          </button>
                          <button className="btn btn-warning" style={{marginTop:"5px"}}>Buy Now</button>
                      </div>
                  </div>
                </div>
            </div>
      </>
   )
  })}

      
  </div>

     {
        cart.length!=0 && (
          <div className="container text-center my-5" style={{
            display:'flex',justifyContent:'center',alignItems:'center'
          }}>
            <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }
    
       
    </>
  )
}

export default Cart