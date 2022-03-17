import { useWishCounter, useCartCounter, useProductContext, usePage, useAuthContext } from "../Context/context-index"
import { Link, useNavigate  } from "react-router-dom"

export default function Navbar() {
    const {dispatch} = useProductContext()
    const {wishCounter} = useWishCounter()
    const {cartCounter} = useCartCounter()
    const {setPage} = usePage()
    const  navigate  = useNavigate()
    const { jwtToken, setJwtToken } = useAuthContext()
    
    const logoutUser = () => {
      localStorage.removeItem("JWT_TOKEN")
      setJwtToken(() => "")
      navigate("/Login")

    }
    return (
      <nav className="navbar ">
        <div>
          <Link to = "/">
              <div href="../index.html" className="navbar-logo">
                  <i className="fas fa-meteor nav-logo"></i>
                  <h2>Surplus</h2>
              </div>
          </Link>
        </div>
        <div className="navbar-search">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="i-text navbar-input-search"
            placeholder="Search for products, brands and more"
          onChange = {(e) => dispatch({type:"SEARCH_FILTER", payload:e.target.value})} onKeyPress={(e) => e.key === "Enter" && navigate("/Product")}/>
        </div>
        <div className="navbar-cart">
          
        {jwtToken ? <button className="btn primary" onClick = {logoutUser}>Logout</button> : <Link to = "/Login"><button className="btn primary">Login</button></Link>}
      
          <Link to = {jwtToken ? "/Wishlist" :"/Login"} ><div className="page-links wish-list">Wishlist
            <i className="far fa-heart nav-icon wish-icon"></i> {jwtToken && <p className="wish-counter">{wishCounter}</p>}
          </div></Link>
          <Link to = {jwtToken ? "/Cart" :"/Login"} ><div className="page-links cart-icon">Cart 
            <i className="fas fa-cart-plus nav-icon "></i> {jwtToken && <p className="wish-counter">{cartCounter}</p>}
          </div></Link>
        </div>
      </nav>
    );
  }
  