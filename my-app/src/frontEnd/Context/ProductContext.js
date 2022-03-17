
import { createContext, useContext, useEffect,useReducer } from 'react';
import  axios  from 'axios';
import {getSearchData, getSortedData, getPriceFilteredData, getCatFilteredData, getfilteredProductsData, productReducer} from "./product-context-function/filter-function"

const ProductContext = createContext()
const useProductContext = () => useContext(ProductContext)

const ProductProvider = ({children}) => {

    
    const [state, dispatch] = useReducer(productReducer,{data:[],filter:{
        sortBy:"",
        priceRange: 5000,
        category: {men:false,women:false,kids:false},
        rating: "",
        search: ""

    }})

    
    //filter data flow functions
    
    const navSearchData = getSearchData(state.data, state.filter.search)
    const sortedData = getSortedData(navSearchData, (state.filter.sortBy))
    const priceFilterData = getPriceFilteredData(sortedData,state.filter.priceRange)
    const categortyFilterData = getCatFilteredData(priceFilterData,state.filter.category)
    const filterProductsData = getfilteredProductsData(categortyFilterData, state.filter.rating)

    useEffect(()=>{
        (async ()=>{
            try {
            const response = await axios.get("/api/products")
            dispatch({type:"SET_SERVER_DATA",payload:response.data.products})
            }
            catch(e){
                console.log("Data fetching is failed")
            }
        })()
      },[])

      
    return (
        <ProductContext.Provider value = {{filterProductsData, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}
export {useProductContext,ProductProvider}
