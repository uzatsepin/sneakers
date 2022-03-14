import { useContext } from "react"
import AppContext from "../context"

export const useCart = () => {
    const {cartItems, setCartItems} = useContext(AppContext);
    const shoppingPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return { cartItems, setCartItems, shoppingPrice };
}
