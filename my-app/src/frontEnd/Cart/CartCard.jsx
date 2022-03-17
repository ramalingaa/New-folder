import React from 'react'
import  axios  from 'axios';
import { useCartContext, useCartCounter, useWish, useWishCounter, useAuthContext } from "../Context/context-index"
import { incrementFunction } from "../ProductListing/product-function/product-fun-index"
import { useState, useEffect } from "react"

export default function CartCard({pInfo}) {
  
  const [wishlistBtn, setWishlistBtn] = useState("Move to Wishlist")
  const { cartData, setCartData } = useCartContext()
  const { setCartCounter } = useCartCounter()
  const { wishData, setWishData } = useWish()
  const { setWishCounter }  = useWishCounter()
  const { jwtToken } = useAuthContext()


  useEffect(() => {
    const isCartItemInWishData = wishData.filter((ele) => ele.image === pInfo.image)
    if(isCartItemInWishData.length > 0) {
      setWishlistBtn(() => "Wishlisted")
    }
  }, [])
 
 

  const incrementCartItems = incrementFunction(cartData, pInfo,pInfo,setCartData)
  const decrementCartItems = ()=> {
    if(Number(pInfo.qty) > 1){
      (async ()=>{
        try {
         
          const response = await axios.post(`/api/user/cart/${pInfo._id}`, {
            action: {
              type: "decrement",
            }
          },
          {
            headers: {
              authorization: jwtToken,
            }
          }
          )
          setCartData(() => response.data.cart)
          


        }
        catch(e){
          console.log("Adding to wishlist failed", e)
        }
      })()

    }
    else if (Number(pInfo.qty) === 1){
      (async ()=>{
        try {
          
          const response = await axios.delete(`/api/user/cart/${pInfo._id}`,
          {
            headers: {
              authorization: jwtToken,
            }
          }
          )
          setCartData(() => response.data.cart)
          setCartCounter((prev)=> prev - 1)
        }
        catch(e){
          console.log("Adding to wishlist failed", e)
        }
      })()
    }
  }
  const addToWishlist = () => {
    (async () => {
      try {
        const response = await axios.post("/api/user/wishlist", {product:{...pInfo}}, {
          headers: {
            authorization: jwtToken,
          }
        }
        );

        setWishData(() => response.data.wishlist);
        
        setWishCounter((prev) => prev + 1);
        setWishlistBtn(() => "Wishlisted")
      }
      catch (e) {
        console.log("Adding to wishlist failed", e);
      }
    })();
  }
const updateProductSize = (e) => {
  pInfo.size = e.target.value
}
  return (
    <div className="cart-product-card-container">
        <div>
          <img src = {pInfo.image} alt = "cartProduct" className="res-img cart-img "/>
        </div>
        <div className = "cart-product-card-text-container">
            <p>{pInfo.productBrand}</p>
            <p>{pInfo.productTitle}</p>
            <p>₹{pInfo.price}</p>
            <div className="cart-size-wrapper">
                <p>Size: </p>
                <select onChange = {updateProductSize}>
                  <option value = "S" selected = {pInfo.size === "S"}>S</option>
                  <option value = "M" selected = {pInfo.size === "M"}>M</option>
                  <option value = "L" selected = {pInfo.size === "L"}>L</option>
                  <option  value = "XL" selected = {pInfo.size === "XL"}>XL</option>
                </select>
            </div>
           
            <div className="cart-btn-wrapper">
                <button className="quantity-btn" onClick = {decrementCartItems}><i className="fas fa-minus"></i></button>
                <p>Quantity: {pInfo.qty}</p>
                <button className="quantity-btn" onClick = {incrementCartItems}><i className="fas fa-plus"></i></button>
            </div>
            {wishlistBtn === "Move to Wishlist"?<button className="btn primary" onClick = {addToWishlist}>{wishlistBtn}</button>:<button className="btn disabled" disabled>{wishlistBtn}</button>}
            <button ><i className="fas fa-times product-wishlist-icon cart-product-icon"></i></button>
        </div>
    </div>
  )
}
