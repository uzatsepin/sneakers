import './product.scss';
import { useState } from "react";

function Product ({id, imageUrl, title, price, onFavourite, onPlus, favourited = false}) {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourited); 

  const onClickPlus = () => {
    onPlus({id, imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  const onClickFavourite = () => {
    onFavourite({id, imageUrl, title, price});
    setIsFavourite(!isFavourite);
  }

  return(
      <div className="product">
        <div className="product__favourite">
          <img src={isFavourite ? './images/heart-liked.svg' : './images/heart-unliked.svg'} 
                alt="favourite" 
                onClick={onClickFavourite} />
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