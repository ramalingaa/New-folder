import { createContext, useContext,useEffect,useState, useRef } from "react"
import axios from "axios";
import { useAuthContext } from "./AuthContext"

const WishIcon = createContext()
const useWish = ()=> useContext(WishIcon)

const IconProvider = ({children})=> {
    const [wishData, setWishData] = useState([])
    const isWishRef = useRef(false)
    const { jwtToken } = useAuthContext()

    useEffect(()=> {
        (async ()=>{
    
            try {
              const serverData = await axios.get("/api/user/wishlist",{headers:{authorization:jwtToken}})
              setWishData(serverData.data.wishlist)
              
            }
            catch(e){
              console.log("Wishlist page failed to load items")
            }
          })()
    },[])
    
    
    return (
        <WishIcon.Provider value = {{wishData,setWishData,isWishRef}}>
            {children}
        </WishIcon.Provider>
    )

}
export {IconProvider,useWish}