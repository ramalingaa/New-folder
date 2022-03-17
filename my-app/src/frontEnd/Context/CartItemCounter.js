import { createContext, useContext,useState,useEffect} from "react";
import axios from "axios"

const CartCountContext = createContext()
const useCartCounter = ()=> useContext(CartCountContext)
const CartCounterProvider = ({children})=> {
    const [cartCounter, setCartCounter] = useState(0)

    useEffect(()=>{
        (async ()=>{
          try {
            const serverData = await axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/cart")
            setCartCounter(serverData.data.length)
          }
          catch(e){
            console.log("Wishlist page failed to load items")
          }
        })()
      },[])
  

   
     
    return (
        <CartCountContext.Provider value = {{cartCounter,setCartCounter}}>
            {children}
        </CartCountContext.Provider>
    )
}
export {CartCounterProvider,useCartCounter}