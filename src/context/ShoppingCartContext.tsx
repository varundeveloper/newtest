import {createContext, ReactNode, useContext} from "react"

const ShoppingCartContext = createContext({})
export function useShoppingCart(){
return useContext(ShoppingCartContext)
}



export function ShoppingCartprovider({children}){
    return(
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}