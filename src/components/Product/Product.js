import './product.scss';
import { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Product ({id, imageUrl, title, price, onFavourite, onPlus, favourited = false, isLoading  = false}) {

  const {isItemAdded} = useContext(AppContext);
  const [isFavourite, setIsFavourite] = useState(favourited); 

  const onClickPlus = () => {
    onPlus({id, imageUrl, title, price});
  }

  const onClickFavourite = () => {
    onFavourite({id, imageUrl, title, price});
    setIsFavourite(!isFavourite);
  }

  return(
      <div className="product">

    {
    isLoading ? 
        <ContentLoader 
        speed={3}
        width={187}
        height={190}
        viewBox="0 0 187 190"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="11" ry="11" width="150" height="90" /> 
        <rect x="0" y="105" rx="3" ry="3" width="150" height="15" /> 
        <rect x="0" y="130" rx="3" ry="3" width="90" height="15" /> 
        <rect x="0" y="155" rx="8" ry="8" width="80" height="25" /> 
        <rect x="115" y="145" rx="8" ry="8" width="32" height="32" />
    </ContentLoader> 
    : 
    <>
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
          <b>{price} грн.</b>
        </div>
        <img 
              width={32} 
              height={32} 
              src={isItemAdded(id) ? './images/btn-cheked.svg' : './images/btn-plus.svg'} 
              alt="buy" 
              onClick={onClickPlus}/>
        </div>
    </>
  } 
 
    </div> 
  )
}

export default Product;