import ProductCard from "./ProductCard";
import { useProductContext } from "../Context/ProductContext"


export default function Product() {
 const {filterProductsData} = useProductContext()
  console.log(filterProductsData)
  return (
    <div >
      <ProductCard serverData = {filterProductsData}/>
      
    </div>
    
  );
}

