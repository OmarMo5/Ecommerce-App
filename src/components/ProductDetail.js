import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsHook from "./ProductsHook.js";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [products] = ProductsHook();
  
  const [product, setProduct] = useState({});

   useEffect(() => {
    const filterProduct = products.filter((prodcut) => prodcut.id == id);
    setProduct(filterProduct[0]);
  }, [id, product.category]); 

  const addToCart = (id, price, title, description, images) => {
    const obj = {
      id,
      price,
      title,
      description,
      images
    };
    setCart([...cart, obj]);
    //console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
      <div className="container con"style={{margin:"12px 0px 45px 0px"}}>
        <div className="img row col-lg-6 col-md-4 col-sm-4">
          <img src={product.images&&product.images[0]} alt="" style={{marginLeft:"30%"}}/>
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} $</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.images
              )
            }
            className="btn btn-warning">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;