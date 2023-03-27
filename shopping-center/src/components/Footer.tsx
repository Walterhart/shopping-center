import useCart from '../hooks/useCart'

type Props ={
    viewCart:boolean
}
function Footer({viewCart}: Props) {
  const { totalItems, totalPrice} = useCart()

  // define year
  const year: number = new Date().getFullYear()

  const content = viewCart
  ?<p>Shopping Cart &copy; {year}</p>
  :(
    <>
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice} </p>
        <p>Shopping Cart: {totalItems}</p>
    </>
  )
  return (
    <div>
        <footer>
            {content}
        </footer>    
    </div>
  )
}

export default Footer