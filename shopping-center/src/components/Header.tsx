import Navbar from "./Navbar"
import useCart from '../hooks/useCart';

type Props = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

function Header ({viewCart, setViewCart} : Props) {

  // 
  const { totalItems, totalPrice} = useCart()
  return (
    <header className="header">
            <h1> Wally - Taberna</h1>
            <p>Total items: {totalItems}</p>
            <p>Total price: {totalPrice} </p>
            <Navbar viewCart = { viewCart} setViewCart = {setViewCart}/>
        </header>
  )
}

export default Header 