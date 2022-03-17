import './App.css';
import NavBar from "./frontEnd/NavBar/NabBar"
import Wishlist from "./frontEnd/Wishlist/Wishlist"
import Product from "./frontEnd/ProductListing/Product"
import {   ProductProvider, SingleProductPageProvider} from "./frontEnd/Context/context-index"
import Address from "./frontEnd/Address/Address"
import Cart  from "./frontEnd/Cart/Cart"
import SingleProductCard from "./frontEnd/SingleProductPage/SingleProductCard"
import { Routes, Route} from "react-router-dom"
import Home from "./frontEnd/Home/Home"
import Login from "./frontEnd/Authentication/Login"
import Signup from './frontEnd/Authentication/Signup';
import  MockAPI  from "./MockMan"
function App() {
  return (
    <div className="App">
      <ProductProvider>
            <SingleProductPageProvider>
                      <NavBar />
                      <Routes>
                        <Route path = "/Product" element = {<Product />}/>
                        <Route path = "/SPP" element = {<SingleProductCard />}/>
                      </Routes>
          </SingleProductPageProvider>
      </ProductProvider>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/Wishlist" element = {<Wishlist />}/>
        <Route path = "/Cart" element = {<Cart />}/>
        <Route path = "/Address" element = {<Address />}/>
        <Route path = "/Login" element = {<Login />}/>
        <Route path = "/Signup" element = {<Signup />}/>
        <Route path = "/Mockman" element = {<MockAPI />}/>


      </Routes>
      

    </div> 
  );
}

export default App;
