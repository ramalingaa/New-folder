import React from 'react'
import { useState } from "react"
import ProductList from "../ProductListing/ProductList"
import { useWish, usePage} from "../Context/context-index"

export default function WishCard() {
  const [wishPage,setWishPage] = useState(true)
  const {wishData} = useWish()
  const { setPage } = usePage()

  return (
    <div className={ wishData.length > 0 ? "product-container" : ""}>
      {wishData.map((ele)=>{
        return (
          <ProductList pInfo = {ele} key = {ele.image} wishPage= {wishPage}/>
        )
      })}
      {wishData.length < 1 && <div className = "empty-wish-wrapper">
        <img className = "empty-wishlist-image"src = "https://res.cloudinary.com/ramlinga/image/upload/v1646918447/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608_tvnpvk.jpg" alt = "empty wishlist" />
        <p>Looks like you haven't added anything to your wishlist.</p>
        <button className="btn primary" onClick = {() => setPage("Products")}>Shop Now</button>
        </div>}
    </div>
  )
}
