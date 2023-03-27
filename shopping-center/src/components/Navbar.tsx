import React from 'react'

type Props = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

// navbar
function Navbar({viewCart, setViewCart} : Props) {

    // button logic
    // view cart or items base on click
    const btn = viewCart ?
    <button onClick={() => setViewCart(false)}>View Items</button>
    :
    <button onClick={() => setViewCart(true)}> View Cart</button>

  return (
 <nav className="nav">
    {btn}
 </nav>
  )
}

export default Navbar