import Info from "../Info/Info";
import {useState} from 'react';
import axios from "axios";
import { useCart } from "../../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Shopping({onClose, items = [], onRemoveFromCart}) {
    const {cartItems, setCartItems, shoppingPrice} = useCart();
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
          setIsLoading(true);
          const { data } = await axios.post('https://622ce8fd087e0e041e1669d2.mockapi.io/orders', {
            items: cartItems,
          });
          setOrderId(data.id);
          setIsOrderComplete(true);
          setCartItems([]);
    
          for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            await axios.delete('https://622ce8fd087e0e041e1669d2.mockapi.io/cart/' + item.id);
            await delay(1000);
          }
        } catch (error) {
          alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
      };

    return (
    <div className="overlay">
        <div className="shopping">
            <div className="shopping__title">
                <h3>Корзина</h3> 
                <img 
                    className="shopping__item_remove-btn" 
                    src="images/delete-btn.svg" 
                    alt="remove" 
                    onClick={onClose}/>
        </div>

        {
            items.length > 0 ? <>
            <div className="shopping__items">
            {items.map((obj, id) => (
             <div className="shopping__item" key={id}>
                <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
             <div className="shopping__item-text">
                 <p className="shopping__item-title">{obj.title}</p>
                 <b className="shopping__item-price">{obj.price} руб.</b>
             </div>
                 <img className="shopping__item_remove-btn" 
                      src="images/delete-btn.svg" 
                      alt="remove" 
                      onClick={() => onRemoveFromCart(obj.id)}/>
             </div>
            ))}
         </div>
           
        <ul className="shopping__info">
            <li className="shopping__info-item">
                <span>Итого:</span>
                <div></div>
                <b>{shoppingPrice} грн.</b>
            </li>
            <li className="shopping__info-item">
                <span>Налог 5%:</span>
                <div></div>
                <b>{Math.round(shoppingPrice / 100 * 5)} грн.</b>
            </li>
            <button disabled={isLoading} onClick={onClickOrder} className="shopping_btn">Оформить заказ <img src="images/arrow.svg" alt="arrow" /></button>
        </ul>
         </>
         : <Info 
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая" }
            image={isOrderComplete ? "./images/ordered.jpeg" : "./images/shopping__empty.png"}
            descr={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте, хотя бы одну пару кроссовок"}
         />
        }
        </div>
    </div>
    )
}

export default Shopping;