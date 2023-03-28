import { ItemType } from '../context/modules/ItemProvider';
import { ReducerActionType, ReducerAction } from '../context/modules/CartProvider';
import { ReactElement } from 'react';

type Props = {
    item: ItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    isSelected: boolean
}

const Item = ({item, dispatch, REDUCER_ACTIONS, isSelected} : Props): ReactElement => {
    
    // iamge link
    const imgPath: string = new URL(`../assets/images/${item.sku}.jpeg`, import.meta.url).href

    // add item to cart
    const onAddCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...item, quantity: 1}})

    // in cart
    const itemCart = isSelected ? `In cart` : null
  return (
    <article className="item">
        <h3> { item.name}</h3>
        <img src = {imgPath} alt = {item.name }/>

        {/* format price */}
        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}{itemCart}</p>
        <button onClick={onAddCart}>Add to Cart</button>
    </article>
  )
}

export default Item