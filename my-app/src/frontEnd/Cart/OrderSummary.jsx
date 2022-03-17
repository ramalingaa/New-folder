import React from 'react'
import { useCartCounter, useCartContext, usePage } from "../Context/context-index"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrderSummary() {
    const { cartData } = useCartContext()
    const {cartCounter} = useCartCounter()
    const { setPage } = usePage()
    const [orderPrice, setOrderPrice] = useState({totalPrice:0,discount:0,delivery:0})

    useEffect(() => {
        const cartPriceDetails = cartData.map((ele) => Number(ele.price) * Number(ele.quantity))
        const priceReducer = (prev, curr) => (prev) + (curr)
        const TotalPrice = cartPriceDetails.reduce(priceReducer,0)
        const discountPrice = parseInt(20 * (TotalPrice/100))
        const deliveryPrice = TotalPrice > 700 ? 0 : 99
        setOrderPrice((prev) => ({...prev,totalPrice:TotalPrice,discount:discountPrice,delivery:deliveryPrice}))
    },[cartData])
   
   
  return (
    <div className = "order-summary-wrapper">
        <p className = "price-details-title price-title-border">PRICE DETAILS (<small>{cartCounter} Items</small>) </p>
        <div className="order-mrp-wrapper">
            <p>Total MRP </p>
            <p>₹{orderPrice.totalPrice}</p>
        </div>
        <div className="order-mrp-wrapper">
            <p>Discount on MRP (<small>20%</small>)</p>
            <p>₹{orderPrice.discount} </p>
        </div>
        <div className="order-mrp-wrapper">
            <p>Convenience Fee </p>
            <p>₹{orderPrice.delivery}</p>
        </div>
        <div className="order-mrp-wrapper total-amount-border">
            <p className = "price-details-title">Total Amount</p>
            <p>₹{orderPrice.totalPrice - orderPrice.discount}</p>
        </div>
        <Link to = "/Address" className = "btn primary order-btn">PLACE ORDER</Link>
    </div>
  )
}
