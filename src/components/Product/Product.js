import './product.scss';

function Product (props) {

    return(
        <div className="product">
          <div className="product__favourite">
            <img src="./images/heart-unliked.svg" alt="favourite" />
          </div>
            <img width={133} height={122} className="product__icon" src={props.imageUrl} alt="Sneakers"/>
            <p className="product__name">{props.title}</p>
        <div className="product_wrapper">
          <div className="product__price">
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <button className="product__btn"
                  onClick={props.onClick}>
            <img width={11} height={11} src="/images/plus.svg" alt="buy" />
          </button>
        </div>
      </div> 
    )
}

export default Product;