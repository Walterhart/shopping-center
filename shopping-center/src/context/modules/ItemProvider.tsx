import { createContext, ReactElement, useState, useEffect } from "react";

export type ItemType = {
  sku: string;
  name: string;
  rating: number;
  price: number;
};

const initState: ItemType[] = [];

export type UseItemsContextType = { items: ItemType[] };

const initContextState: UseItemsContextType = { items: [] };

const ItemContext = createContext<UseItemsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ItemProvider = ({ children }: ChildrenType): ReactElement => {
  const [items, setItems] = useState<ItemType[]>(initState);

  useEffect(() => {
    const fetchItems = async (): Promise<ItemType[]> => {
      const data = await fetch("http://localhost:3500/items")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };
    fetchItems().then((items) => setItems(items));
  }, []);

  return (
    <ItemContext.Provider value={{ items }}>{children}</ItemContext.Provider>
  );
};

export default ItemContext;
