import {createContext, ReactNode, useContext} from "react"

type ShoppingCartproviderProps ={
    children: ReactNode
}

type ShoppingCartContext ={
    getItemQuantity: (id: number)=>number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number)=> void
    removeFromCart: (id: number) =>void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
return useContext(ShoppingCartContext)
}



export function ShoppingCartprovider({children}:ShoppingCartproviderProps ){
    return(
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}