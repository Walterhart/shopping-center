import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemList from "./components/ItemList";
import "./styles/style.scss";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const content = viewCart ? <Cart /> : <ItemList />;

  //const pageContent = viewCart ? <Cart/> : <ProductList/>
  return (
    <div className="app">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {content}
      <Footer viewCart={viewCart} />
    </div>
  );
}

export default App;
