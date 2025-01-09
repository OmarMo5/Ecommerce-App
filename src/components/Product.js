import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import ProductsHook from "./ProductsHook.js";


const Product = ({ cart , setCart}) => {

  const [products,run] = ProductsHook();
  const addToCart = (id,price,title,description,image) =>{
    const obj = {
      id,price,title,description,image
    };
    setCart([...cart, obj]);
    toast("Item Added To Card");
  }
  console.log(products);
  
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> 
      <div className="container my-5">
        <div className="row">
          {products&&products.map((product) => {
            
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem",height:"850px"}}>
                    
                    <Link to={`/product/${product.id}`} style={{
                      display:'flex',justifyContent:'center', alignItems:'center'}}>
                      <img src={product.images[0]} className="card-img-top" alt="..." 
                           style={{width:"50%",height:"220px",marginTop:"30px",marginBottom:"10px"}}/>
                    </Link>

                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <textarea readOnly style={{width:"100%",height:"350px", padding: "12px 20px",
                                        boxSizing: "border-box",border: "2px solid #fff",
                                        borderRadius: "4px",backgroundColor:" #f8f8f8",
                                        fontSize: "16px",resize: "none",overflow:"hidden"}}>
                        {product.description}
                      </textarea>
                      <div style={{marginRight:"20px"}}>  
                        <button className="btn btn-primary mx-3">
                          {product.price} $
                        </button>
                        <button onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.images[0])}
                                className="btn btn-warning">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;