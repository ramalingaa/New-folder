const productReducer = (state, action) => {
    switch(action.type){
        case "SET_SERVER_DATA": {
            return {...state,data:action.payload}
        }
        case "SEARCH_FILTER" : {
            return {...state, filter:{...state.filter,search:action.payload}} 
        }
        case "PRICE_FILTER" : {
           
            return {...state, filter:{...state.filter,priceRange:action.payload}}
        }
        case "CAT_Men" : {
           return {...state, filter:{...state.filter,category:{...state.filter.category,men:!state.filter.category.men}}}
        }
        case "CAT_Women" : {
            return {...state, filter:{...state.filter,category:{...state.filter.category,women:!state.filter.category.women}}}
         }
         case "CAT_Kids" : {
            return {...state, filter:{...state.filter,category:{...state.filter.category,kids:!state.filter.category.kids}}}

         }
        case "RESET_FILTER" : {
            return {...state, filter:{
                search:"",
                sortBy:"",
                priceRange: 5000,
                category: {men:false,women:false,kids:false},
                rating: ""
        
            }}
        }
        case "RATING_FILTER": {

            return {...state, filter:{...state.filter,rating:action.payload}}
        }
        case "SORT_BY_PRICE": {
                return {...state,filter:{...state.filter,sortBy:action.payload}}
                
            
        }
        default:{
        }
    }
}

export { productReducer }