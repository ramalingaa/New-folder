import { createContext, useContext,useEffect, useState} from "react"
import  axios  from 'axios';
import { useAuthContext } from "./AuthContext";
const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    
    const [cartData, setCartData] = useState([]);
    const { jwtToken } = useAuthContext();

    useEffect(()=> {
        (async ()=> {
            try {
                console.log(jwtToken);
                const response = await axios.get("/api/user/cart",{headers:{authorization:jwtToken}})
                console.log("fro cart",response.data.cart)
                setCartData(response.data.cart)

            }catch(e){
                console.log("loading cart items failed",":", e)
            }
        })()
    },[])
    console.log(cartData,"cartData")
    return (
        <CartContext.Provider value = {{cartData,setCartData}}>
            {children}
        </CartContext.Provider>
    )
}
export { useCartContext,CartProvider }
