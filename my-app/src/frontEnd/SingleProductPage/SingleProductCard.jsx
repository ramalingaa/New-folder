import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { useSingleProductPage, useCartContext, useWish, useWishCounter, useCartCounter, usePage } from "../Context/context-index"
import { addToCartFunction } from "../ProductListing/product-function/product-fun-index"
import { Link } from 'react-router-dom';
const SingleProductCard = () => {
    const [wishlistBtn, setWishlistBtn] = useState("Wishlist")
    const [cartBtn, setCartBtn] = useState("Add to Cart")
  const { cartData, setCartData } = useCartContext()
  const { setCartCounter } = useCartCounter()
  const { wishData, setWishData } = useWish()
  const { setWishCounter }  = useWishCounter()
  const { setPage } = usePage()

    const { singleProduct } = useSingleProductPage()

    useEffect(() => {
        const isItemInWishData = wishData.filter((ele) => ele.image === singleProduct.image)
        if(isItemInWishData.length > 0) {
          setWishlistBtn(() => "Wishlisted")
        }
      }, [])
      useEffect(() => {
        const isItemInCartData = cartData.filter((ele) => ele.image === singleProduct.image)
        if(isItemInCartData.length > 0) {
            setCartBtn(() => "Go to Cart")
        }
      }, [])
     
      const addToWishlist = () => {
        (async () => {
            try {
              const response = await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist", singleProduct);
              setWishData((prev) => [...prev, response.data]);
              setWishCounter((prev) => prev + 1);
              setWishlistBtn(() => "Wishlisted")

            }
            catch (e) {
              console.log("Adding to wishlist failed", e);
            }
          })();
      }
      const addToCart = addToCartFunction(singleProduct,setCartData, setCartCounter, setCartBtn)
      const selectSize = (e) => {
        singleProduct.size =  e.target.innerText
      }
      const goToCart = () => {
          setPage(() => "Cart")
      }
    const { image, productBrand, productTitle, price, rating} = singleProduct


  return (
    <div className = "single-product-wrapper">
            <img src = {image} alt = "product" className = "res-img product-pageImg"/>
        <div className = "single-product-text">
            <p>{productTitle} by <strong>{productBrand}</strong></p>
            <p>Rating: {rating} <i className="fas fa-star rating-icon"></i></p>
            <p className = "price-tag">₹{price} <small className="offer-tag">20% off</small></p>
            <p className="tax-inclusive-tag">Inclusive of all taxes</p>
            <h3 className = "size-header">Select size</h3>
            <div className = "size-btn-wrapper">
                <button className = "btn-fab size-btn" onClick = {selectSize}>S</button>
                <button className = "btn-fab size-btn" onClick = {selectSize}>M</button>
                <button className = "btn-fab size-btn" onClick = {selectSize}>L</button>
                <button className = "btn-fab size-btn" onClick = {selectSize}>XL</button>
            </div>
            <div className="button-wrapper">
                {wishlistBtn === "Wishlist" ? <button className = "btn outlined product-page-btn" onClick={addToWishlist}>{wishlistBtn}</button> :<button className = "btn outlined product-page-btn disabled" disabled>{wishlistBtn}</button>}
                {cartBtn === "Add to Cart" ? <button className = "btn primary product-page-btn"onClick={addToCart}>{cartBtn}</button> : <Link to = "/Cart" className = "cart-link-align"><button className = "btn primary product-page-btn" onClick = {goToCart}>{cartBtn}</button></Link>}
            </div>
            <p>Sold by {productBrand} Pvt.ltd</p>
            <p><i className="fal fa-truck-moving product-info-icon"></i><strong> Get it by time { new Date().getDate() + 5 }-{ new Date().getMonth() + 1 }-{ new Date().getFullYear()}</strong></p>
            
            {Number(price) < 1000 ? <p><i className="far fa-hand-holding-box product-info-icon"></i><strong>Pay on delivery is available</strong></p> : <p><i className="far fa-hand-holding-box product-info-icon"></i><strong> This item is not eligible for Pay on Delivery</strong></p>}
            <p><i className="fal fa-sync-alt product-info-icon"></i><strong>Easy 30 days return & exchange available</strong></p>
            <p><i className="fas fa-badge-check product-info-icon secure-icon"></i>100% Original Products</p>
            <div className="product-details-wrapper">
              <h2>Product Details</h2>
              <p>{productTitle} by {productBrand}</p>
              <h3>Size & Fit</h3>
              <p>The model (height 6') is wearing a size M</p>
              <h3>Material & Care</h3>
              <p>100% cotton Machine-wash</p>
        </div>
        </div>
        
    </div>
  )
}

export default SingleProductCard