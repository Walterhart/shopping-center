import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './context/modules/CartProvider';
import './index.css'
import { ItemProvider } from './context/modules/ItemProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ItemProvider>
  </React.StrictMode>,
)
