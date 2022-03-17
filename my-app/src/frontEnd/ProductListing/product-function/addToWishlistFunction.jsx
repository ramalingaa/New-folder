import axios from "axios";
import { v4 as uuid } from "uuid";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom"

export function addToWishlistFunction(wishPage, wishData, pInfo, setIsWishItem, setWishIcon, setWishData, setWishCounter, isWishItem,wishItem) {
  const { jwtToken } = useAuthContext()
  const navigate = useNavigate()
  return () => {
   if( jwtToken ){
      //If wishpage is open if condition will get executed
    if (wishPage) {
      // const indexDelete = wishData.findIndex((ele) => ele.id === pInfo.id);
      // const newWishListData = wishData.filter((ele, index) => index !== indexDelete);
      (async () => {
        try {
          const response = await axios.delete(`/api/user/wishlist/${pInfo._id}`,{headers: {
            authorization: jwtToken,
          }});
          if (response.status === 200) {
            setIsWishItem(false);
            setWishIcon("");
            setWishData(() => response.data.wishlist);
            setWishCounter((prev) => prev - 1);
          }
        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();
    }


    //product page functionality for add to wishlist button
    else {
      //If not added to wishlist the item will be added to wishlist. The initial state is false so it get's added to wishlist on first click
      if (!isWishItem) {
        (async () => {
          try {
            const response = await axios.post("/api/user/wishlist", {product:{...pInfo}}, {
              headers: {
                authorization: jwtToken,
              }
            }
            );
            setIsWishItem(true);
            setWishData(() => response.data.wishlist);
            setWishIcon("icon-selected");
            setWishCounter((prev) => prev + 1);
          }
          catch (e) {
            console.log("Adding to wishlist failed", e);
          }
        })();
      }


      //If the item is already added to wishlist it will be deleted 
      else {
        (async () => {
          try {
            
            const newWishData = wishData.filter((ele) => ele._id !== wishItem._id)
            const response = await axios.delete(`/api/user/wishlist/${wishItem._id}`,{headers: {
              authorization: jwtToken,
            }});
            setIsWishItem(false);
            setWishIcon("");
            setWishData(() => response.data.wishlist)
            setWishCounter((prev) => prev - 1);
          }
          catch (e) {
            console.log("Adding to wishlist failed", e);
          }
        })();
      }
    }
   }
   else {
     navigate("/Login")
   }
  };
}
