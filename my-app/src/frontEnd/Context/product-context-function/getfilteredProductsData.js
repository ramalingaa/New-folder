const getfilteredProductsData = (categortyFilterData, rating) => {
    if(rating){
        const ratingFilteredData = categortyFilterData.filter((ele) => Number(ele.rating) >= Number(rating))
        return ratingFilteredData
    }
    return categortyFilterData
    
}
export { getfilteredProductsData }