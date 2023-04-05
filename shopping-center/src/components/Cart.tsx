import useCart from "../hooks/useCart";
import { useState } from "react";
import CartCheckout from "./CartCheckout";
import { BsCartCheck } from "react-icons/bs";

function Cart() {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmit = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const content = confirm ? (
    <h2> Your order has been completed! Have a great day </h2>
  ) : (
    <>
      <ul>
        {cart.map((item) => {
          return (
            <CartCheckout
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className="cart--items">
        <p> Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className="btn rounded-pill btn-secondary"
          disabled={!totalItems}
          onClick={onSubmit}
        >
          <BsCartCheck />
        </button>
      </div>
    </>
  );
  return <main className="cart">{content}</main>;
}

export default Cart;
