import { useMemo, useReducer, createContext, ReactElement } from 'react';

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

// useCartContext hook
const useCartContext = (initCartState: CartStateType) =>{
    const [state, dispatch] = useReducer(reducer, initCartState)

    // remeber value of actions
    // prevent re-rendering
    const REDUCER_ACTIONS = useMemo(() =>{
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItems = state.cart.reduce((previousValue, cartItem) =>{
        return previousValue + cartItem.quantity
    },0)

    // format currency
    const totalPrice = new Intl.NumberFormat('en-US', { style:
    'currency', currency: 'USD'}).format(
        state.cart.reduce((previousValue, cartItem) =>{
            return previousValue + (cartItem.quantity * cartItem.price)
        },0)
    )

    // sort cart
    // return itemA before itemB
    const cart = state.cart.sort ((item1, item2) => {

        // extract sku numbers
        const itemA = Number(item1.sku.slice(-4))
        const itemB = Number(item2.sku.slice(-4))
        return itemA - itemB
    })

    return {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
}

export type UseCartContextType = ReturnType <typeof useCartContext>

// init state
const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems:0 ,
    totalPrice: '',
    cart: []
}

export const  CartContext= createContext<UseCartContextType>
(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]} 


export const CartProvider = ({ children} : ChildrenType):
ReactElement =>{
   return(
    <CartContext.Provider value = { useCartContext (initCartState)}>
    {children}
    </CartContext.Provider>
   )
}