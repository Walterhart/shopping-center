import { createContext, ReactElement, useState } from "react"

export type ItemType = {
    sku: string,
    name: string,
    price: number
}

const initState: ItemType[] = []

export type UseItemsContextType = {items: ItemType[]}

const initContextState: UseItemsContextType = { items: []}

const ItemContext = createContext<UseItemsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[]}

export const ItemProvider = ({ children}: ChildrenType):
    ReactElement =>{
    const [items, setItems] = useState<ItemType[]>(initState)

    return (
        <ItemContext.Provider value ={{ items }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContext