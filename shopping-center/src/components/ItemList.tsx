import React from 'react'
import useCart from '../hooks/useCart';
import { UseItemsContextType } from '../context/modules/ItemProvider';
import useItems from '../hooks/useItems';
import { ReactElement } from 'react';
import Item from './Item';

function ItemList() {

  // call custom hooks
  const { dispatch, REDUCER_ACTIONS, cart} = useCart()
  const { items} = useItems()

  let content: ReactElement | ReactElement[] = <p>Loading...</p>

  // if items map items
  // reutrn items
  if (items?.length) {
    content = items.map(item =>{
      const isSelected: boolean = cart.some(item => item.sku === item.sku)

        return (
          <Item key = {item.sku} item = {item} dispatch ={dispatch} REDUCER_ACTIONS = {REDUCER_ACTIONS} isSelected = {isSelected} />
          
        )
    })
  }
  return (
   <main className="main--item">
    {content}
   </main>
  )
}

export default ItemList