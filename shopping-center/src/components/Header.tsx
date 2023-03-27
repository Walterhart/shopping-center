import Navbar from "./Navbar"

type Props = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

function Header ({viewCart, setViewCart} : Props) {
  
  return (
    <header className="header">
            <h1> Wally - Taberna</h1>
            <p>Total items:</p>
            <p>Total price:</p>
            <Navbar viewCart = { viewCart} setViewCart = {setViewCart}/>
        </header>
  )
}

export default Header 