import { useMemo, useReducer } from "react"

export type CartItemType ={
    sku: string,
    name: string,
    price: number,
    quantity: number,
}

type CartStateType = { cart: CartItemType[]}

// state for cart
const initCartState: CartStateType = { cart: []}

// action types
const REDUCER_ACTION_TYPE ={
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT,"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

// actions varibales
export type ReducerAction ={
    type: string,
    payload?: CartItemType,
}


// reducer function
const reducer = (state: CartStateType, action: ReducerAction):
CartStateType =>{
    switch (action.type){
        case REDUCER_ACTION_TYPE.ADD:{
            if(!action.payload){
                throw new Error("No payload for action.add");
            }
            
            const { sku, name, price} = action.payload

            // filter cart
            const filterCart: CartItemType[] = state.cart.filter (item => item.sku !== sku)
            
            const itemExists: CartItemType | undefined = state.cart.find(item =>item.sku === sku)

            // item exist?
            const quantity: number = itemExists ? itemExists?.quantity+1 : 1
            return { ...state, cart: [...filterCart,{sku, name, price, quantity}]}

        
        }
        case REDUCER_ACTION_TYPE.REMOVE:{
            if(!action.payload){
                throw new Error("No payload for action.remove");
            }

            const { sku} = action.payload

             
            const filterCart: CartItemType[] = state.cart.filter (item => item.sku !== sku)

            return { ...state, cart:[ ...filterCart]}
            
        }
        case REDUCER_ACTION_TYPE.QUANTITY:{
            if(!action.payload){
                throw new Error("No payload for action.quantity");
            }

            const { sku, quantity} = action.payload

            const itemExists: CartItemType | undefined = state.cart.find(item =>item.sku === sku)

            if (!itemExists){
                throw new Error("Item doesnt exist for update quanyity");
            }

            const updatedItem: CartItemType = { ...itemExists, quantity}

            const filterCart: CartItemType[] = state.cart.filter (item => item.sku !== sku)

            return { ...state, cart:[...filterCart, updatedItem]}
        } 
        case REDUCER_ACTION_TYPE.SUBMIT:{
            return { ...state, cart:[]}
            
        }
        default:
            throw new Error("Error has occured in reducer action type");
    }
}

const useCartContext = (initCartState: CartStateType) =>{
    const [state, dispatch] = useReducer(reducer, initCartState)

    const REDUCER_ACTIONS = useMemo(() =>{
        return REDUCER_ACTION_TYPE
    }, [])
}