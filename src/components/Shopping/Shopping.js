function Shopping({onClose, items = [], onRemoveFromCart}) {
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
                <b>21 498 руб.</b>
            </li>
            <li className="shopping__info-item">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
            </li>
            <button className="shopping_btn">Оформить заказ <img src="images/arrow.svg" alt="arrow" /></button>
        </ul>
         </>
         : <div className="shopping__empty">
            <img className="shopping__empty-img" src="./images/shopping__empty.png" alt="empty" width={120} height={120} />
            <div className="shopping__empty-wrapper">
                <h3 className="shopping__empty-title">Корзина пустая</h3>
                <p className="shopping__empty-text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            </div>
            <button onClick={onClose} className="shopping_btn"> <img src="images/arrow.svg" alt="arrow" /> Вернуться назад</button>    
        </div>
        }
        </div>
    </div>
    )
}

export default Shopping;