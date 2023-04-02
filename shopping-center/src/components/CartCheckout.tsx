import React, { ChangeEvent } from "react";
import {
  CartItemType,
  ReducerActionType,
  ReducerAction,
} from "../context/modules/CartProvider";
import { ReactElement } from "react";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

type Props = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};
const CartCheckout = ({ item, dispatch, REDUCER_ACTIONS }: Props) => {
  const imgPath: string = new URL(
    `../assets/images/${item.sku}.jpeg`,
    import.meta.url
  ).href;

  const subtotal: number = item.quantity * item.price;

  // max quantity
  const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity;

  // quantity options values
  const optionValues: number[] = [...Array(highestQuantity).keys()].map(
    (i) => i + 1
  );

  // quanity options
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  // change quantity
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) },
    });
  };

  // remove item
  const onRemove = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  return (
    <li className="cart--item">
      <img src={imgPath} alt={item.name} />
      <div aria-label="Item Name"> {item.name}</div>
      <div aria-label="Price per Item">
        {" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </div>
      <label>Item Quantity</label>
      <select
        name="itemQuantity"
        id="itemQuantity"
        className="cart--select"
        value={item.quantity}
        onChange={onChange}
      >
        {options}
      </select>
      <div className="cart--subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(subtotal)}
      </div>
      <button
        className="cart--button"
        title="Remove Item From Cart"
        onClick={onRemove}
      >
        <BsCartDash />
      </button>
    </li>
  );
};

export default CartCheckout;
