const getPriceFilteredData = (sortedProducts, priceRange) => {
    const priceFilterData = sortedProducts.filter((ele) => 
        Number(ele.price) < Number(priceRange)
    )
    return priceFilterData
}

export { getPriceFilteredData }