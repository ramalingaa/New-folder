import React from 'react'
import CartCard from "./CartCard"
import OrderSummary from './OrderSummary';
import {  usePage, useCartContext} from "../Context/context-index"


export default function Cart() {
    const { cartData } = useCartContext()
    const { setPage } = usePage()

    
  return (
    <div className = {cartData.length > 0 ? "cart-product-mainWrapper": ""}>
        <div className ="cart-productCard-wrapper">
          {cartData.map((ele)=>{
            return <CartCard pInfo = {ele} key = {ele.id}/>
          })}
        </div>
        <div className = "ordereSummary-wrapper">
           {cartData.length > 0 && <OrderSummary />}
        </div>
        {cartData.length < 1 && <div className = "empty-wish-wrapper">
        <img className = "empty-wishlist-image"src = "https://res.cloudinary.com/ramlinga/image/upload/v1646919491/shopping-cart-isolated-white-background_C3_AF_C2_BC_C5_93there-no-data-shopping-cart_C3_AF_C2_BC_C5_93small-bee-shopping-cart-empty-vector-122894182_f9b2m5.jpg" alt = "empty wishlist" />
        <p>Looks like you haven't added anything to your Cart.</p>
        <button className="btn primary" onClick = {() => setPage("Products")}>Shop Now</button>
        </div>}
    </div>
  )
}
