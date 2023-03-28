import { useContext } from 'react';
import ItemContext, {UseItemsContextType } from '../context/modules/ItemProvider';

// Items hook
// provide items context
const useItems = (): UseItemsContextType =>{
        return useContext(ItemContext)
}

export default useItems