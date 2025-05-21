import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const moeda = 'R$';
    const taxa_entrega = 15;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false)

    const value = {
        products , moeda, taxa_entrega,
        search,setSearch,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;