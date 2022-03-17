import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export function addToCartFunction(pInfo, setCartData, setCartCounter, setCartBtn = "") {
  const { jwtToken } = useAuthContext()
  const navigate = useNavigate()
  return () => {
   
    if(jwtToken){
      (async () => {
        try {
          const response = await axios.post("/api/user/cart", {product:{...pInfo}}, {
            headers: {
              authorization: jwtToken,
            }
          });
          setCartData(() => response.data.cart);
          setCartCounter((prev) => prev + 1);
          setCartBtn(() => "Go To Cart")
        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();
    }
    else {
      navigate("/Login")
    }
   
  };
  
}
