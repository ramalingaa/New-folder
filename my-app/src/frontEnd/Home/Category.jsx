import React from 'react'
import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <div className="home-cat-wrapper">
        <Link to = "/Product" className="cat-card-wrapper">
            <div >
                <img src = "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt = "Men Category" className="cat-card-img"/>
                <p>Men</p>
            </div>
        </Link>
        <Link to = "/Product"className="cat-card-wrapper">
            <div >
                <img src = "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt = "Men Category" className="cat-card-img"/>
                <p>Women</p>
            </div>
        </Link>
        <Link to = "./Product" className="cat-card-wrapper">
            <div>
                <img src = "https://media.istockphoto.com/photos/happy-curly-boy-laughing-and-holding-skateboard-picture-id1124742827?b=1&k=20&m=1124742827&s=170667a&w=0&h=FjLMBTxiZOhJB45V-L3pm_tYC4dYqHyTD2e_nRJN5LE=" alt = "Men Category" className="cat-card-img"/>
                <p>Kids</p>
            </div>
        </Link>
        <Link to = "./Product" className="cat-card-wrapper">
            <div>
                <img src = "https://media.istockphoto.com/photos/living-room-interior-mock-up-modern-furniture-and-trendy-home-on-picture-id1277609544?b=1&k=20&m=1277609544&s=170667a&w=0&h=twZPxv091nG7Yv9hZKTfO3Xc2iW_49C5_ciHxFY3vwk=" alt = "Men Category" className="cat-card-img"/>
                <p>Home</p>
            </div>
        </Link>
        <Link to = "./Product" className="cat-card-wrapper">
            <div >
                <img src = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = "Men Category" className="cat-card-img"/>
                <p>Beauty</p>
            </div>
        </Link>
        
      </div>
  )
}
