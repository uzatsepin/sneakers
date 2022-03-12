function Shopping({onClose, items = [], onDeleteItem}) {
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
        <div className="shopping__items">
           {items.map((obj, id) => (
            <div className="shopping__item" key={id}>
               <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
            <div className="shopping__item-text">
                <p className="shopping__item-title">{obj.title}</p>
                <b className="shopping__item-price">{obj.price} руб.</b>
            </div>
                <img className="shopping__item_remove-btn" src="images/delete-btn.svg" alt="remove" />
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
        </div>
    </div>
    )
}

export default Shopping;