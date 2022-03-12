import './product.scss';
import { useState } from "react";

function Product ({imageUrl, title, price, onFavourite, onPlus}) {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  return(
      <div className="product">
        <div className="product__favourite">
          <img src="./images/heart-unliked.svg" alt="favourite" onClick={onFavourite} />
        </div>
          <img width={133} height={122} className="product__icon" src={imageUrl} alt="Sneakers"/>
          <p className="product__name">{title}</p>
      <div className="product_wrapper">
        <div className="product__price">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img 
              width={32} 
              height={32} 
              src={isAdded ? './images/btn-cheked.svg' : './images/btn-plus.svg'} 
              alt="buy" 
              onClick={onClickPlus}/>
      </div>
    </div> 
  )
}

export default Product;