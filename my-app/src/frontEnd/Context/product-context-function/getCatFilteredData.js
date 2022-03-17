const getCatFilteredData = (priceFilterData, category) => {
    const catFilterData = []
    if(category.men === false && category.women === false && category.kids === false) {
        return priceFilterData
    }
    if(category.men){
        const menProducts = priceFilterData.filter((ele) => ele.category === "Men")
        catFilterData.push(...menProducts)
    }
    if(category.women){
        const womenProducts = priceFilterData.filter((ele) => ele.category === "Women")
        catFilterData.push(...womenProducts)
    }
    if(category.kids){
        const kidsProducts = priceFilterData.filter((ele) => ele.category === "Kids")
        catFilterData.push(...kidsProducts)
    }
    return catFilterData
}

export { getCatFilteredData }