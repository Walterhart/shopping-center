import Navbar from "./Navbar";
import useCart from "../hooks/useCart";

type Props = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ viewCart, setViewCart }: Props) {
  const { totalItems, totalPrice } = useCart();
  return (
    <header className="header">
      <div className="header--title">
        <h1> Wally - Taberna</h1>
      </div>
      <div className="items--detail">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice} </p>
        <Navbar viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  );
}

export default Header;
