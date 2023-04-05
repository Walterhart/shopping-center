import { BsFillCartFill } from "react-icons/bs";
type Props = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
// navbar
function Navbar({ viewCart, setViewCart }: Props) {
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
        3
      </div>
    </button>
  );
  return <nav className="nav">{btn}</nav>;
}
export default Navbar;
