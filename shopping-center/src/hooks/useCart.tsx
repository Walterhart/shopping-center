import { useContext } from 'react';
import { UseCartContextType, CartContext } from '../context/modules/CartProvider';

// cart hook
// provide context
const useCart = (): UseCartContextType =>{
        return useContext(CartContext)
}


export default useCart