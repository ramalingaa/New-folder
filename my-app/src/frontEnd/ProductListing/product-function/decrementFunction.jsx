import axios from "axios";
import { useAuthContext } from "../../Context/AuthContext";

export function decrementFunction(cartItem, cartData, pInfo, setCartData, setCartCounter, setIsCartItem) {
  const { jwtToken } = useAuthContext()

  return () => {
    if (Number(cartItem.qty) > 1) {
      (async () => {
        try {
         
          const response = await axios.post(`/api/user/cart/${cartItem._id}`, {
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
          console.log(response)
          setCartData(() => response.data.cart);



        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();

    }
    else if (Number(cartItem.qty) === 1) {
      (async () => {
        try {
          
          const response = await axios.delete(`/api/user/cart/${cartItem._id}`,
          {
            headers: {
              authorization: jwtToken,
            }
          }
          )
          console.log(response.data.cart)
          setCartData(() => response.data.cart);
          setCartCounter((prev) => prev - 1);
          setIsCartItem(false);
        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();
    }
  };
}
