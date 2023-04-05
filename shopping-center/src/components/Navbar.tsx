import { BsFillCartFill } from "react-icons/bs";
import useCart from "../hooks/useCart";
type Props = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
// navbar
function Navbar({ viewCart, setViewCart }: Props) {
  const { totalItems } = useCart();
  // button logic
  // view cart or items base on click
  const btn = viewCart ? (
    <button
      className="btn rounded-circle btn-secondary p-2"
      onClick={() => setViewCart(false)}
    >
      <BsFillCartFill />
    </button>
  ) : (
    <button
      className="btn rounded-circle btn-secondary position-relative p-2"
      onClick={() => setViewCart(true)}
    >
      <BsFillCartFill />
      <div className="position-absolute top-100 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
        {totalItems}
      </div>
    </button>
  );
  return <nav className="nav">{btn}</nav>;
}
export default Navbar;
