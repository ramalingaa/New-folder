const getSearchData = (products, searchValue) => {
    if(searchValue){
        const searchProductsData = products.filter((ele) => ele.productTitle.toLowerCase().includes(searchValue.toLowerCase()))
        return searchProductsData
    }
   return products
}
export { getSearchData }