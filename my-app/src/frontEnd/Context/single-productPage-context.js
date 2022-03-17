
import { createContext, useContext, useState } from 'react';
const SingleProductContext = createContext({})
 const useSingleProductPage = () => useContext(SingleProductContext)

 const SingleProductPageProvider = ({children}) => {
    const [singleProduct, setSingleProduct] = useState({})

    
    return (
        <SingleProductContext.Provider value = {{singleProduct, setSingleProduct}}>
            {children}
        </SingleProductContext.Provider>
    )
}
export { useSingleProductPage, SingleProductPageProvider }