import { createContext, useContext,useState,useEffect } from "react"
import axios from "axios"
const WishCounter = createContext()
const useWishCounter = ()=> useContext(WishCounter)

const WishCounterProvider = ({children})=> {
    const [wishCounter, setWishCounter] = useState(0)
    // const [wishData, setWishData] = useState([])

    useEffect(()=>{
        (async ()=>{
          try {
            const serverData = await axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist")
            // setWishData(serverData.data)
            setWishCounter(serverData.data.length)
          }
          catch(e){
            console.log("Wishlist page failed to load items")
          }
        })()
      },[])
    
    return (
        <WishCounter.Provider value = {{wishCounter, setWishCounter}}>
            {children}
        </WishCounter.Provider>
    )

}
export {WishCounterProvider,useWishCounter}