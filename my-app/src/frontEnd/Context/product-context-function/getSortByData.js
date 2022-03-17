const getSortedData = (products, sortBy) => {
    const sortProducts = [...products]
    if(sortBy === "lowToHigh"){
        sortProducts.sort((firstEl, secondEl) => 
            Number(firstEl.price) - Number(secondEl.price)
        )
    }
    if(sortBy === "highToLow"){
        sortProducts.sort((firstEl, secondEl) =>
        Number(secondEl.price) - Number(firstEl.price))
    }
    return sortProducts
}
export { getSortedData }