import axios from "axios";
import { useAuthContext } from "../../Context/AuthContext";

export function incrementFunction(cartData, pInfo, cartItem = pInfo, setCartData) {
  const { jwtToken } = useAuthContext()

  return () => {
    console.log(cartItem._id);
    (async () => {
      try {
        // console.time("Increment")
        // const newIncrementData = JSON.parse(JSON.stringify(cartData));
        // const indexOFCartItem = newIncrementData.findIndex((ele) => ele.image === pInfo.image)
        // ++newIncrementData[indexOFCartItem].quantity

         const response = await axios.post(`/api/user/cart/${cartItem._id}`, {
          action: {
            type: "increment",
          }
        },
        {
          headers: {
            authorization: jwtToken,
          }
        }
        );
        console.log(response)
         setCartData(() => response.data.cart);
      }
      catch (e) {
        console.log("Adding to Cart failed", e);
      }
    })();
  };
}
