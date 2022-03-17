import { createContext, useContext,useState } from "react"
const PageContext = createContext()
const usePage = ()=> useContext(PageContext)

const PageContextProvider = ({children})=> {
    const [page, setPage] = useState("Products")

    const clickHandler = (e)=> setPage(e.target.innerText)
    
    return (
        <PageContext.Provider value = {{page,clickHandler, setPage}}>
            {children}
        </PageContext.Provider>
    )

}
export {PageContextProvider,usePage}