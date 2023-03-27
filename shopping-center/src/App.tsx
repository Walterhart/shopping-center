import './App.css'
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/header';
import Cart from './components/Cart';
import ItemList from './components/itemList';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)
  
  const content = viewCart ? <Cart/> : <ItemList/>

  //const pageContent = viewCart ? <Cart/> : <ProductList/>
  return (
    <div className="app">
      <Header/>
      {content}
      <Footer/>
    </div>
  )
}

export default App
