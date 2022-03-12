

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img width={40} height={40} src="/images/logo.png" alt="" className="" />
          <div className="header__info">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right">
          <li className="header__card">
            <img className="header__card-img" width={18} height={18} src="/images/cart.svg" alt="cart" />
            <span>1206 руб.</span>
            </li>
          <li>
            <img className="header__user-img" width={18} height={18} src="/images/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1>Все кроссовки</h1>
          <div className="products__wrapper">
            <div className="product">
              <img width={133} height={122} className="product__icon" src="images/products/nike blazer mid suede.jpeg" alt="Sneakers"/>
              <p className="product__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className="product_wrapper">
                <div className="product__price">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="product__btn">
                  <img width={11} height={11} src="/images/plus.svg" alt="buy" />
                </button>
              </div>
            </div>
            <div className="product">
              <img width={133} height={122} className="product__icon" src="images/products/product_2.jpeg" alt="Sneakers"/>
              <p className="product__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className="product_wrapper">
                <div className="product__price">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="product__btn">
                  <img width={11} height={11} src="/images/plus.svg" alt="buy" />
                </button>
              </div>
            </div>
            <div className="product">
              <img width={133} height={122} className="product__icon" src="images/products/product_3.jpeg" alt="Sneakers"/>
              <p className="product__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className="product_wrapper">
                <div className="product__price">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="product__btn">
                  <img width={11} height={11} src="/images/plus.svg" alt="buy" />
                </button>
              </div>
            </div>
            <div className="product">
              <img width={133} height={122} className="product__icon" src="images/products/product_4.jpeg" alt="Sneakers"/>
              <p className="product__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className="product_wrapper">
                <div className="product__price">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="product__btn">
                  <img width={11} height={11} src="/images/plus.svg" alt="buy" />
                </button>
              </div>
            </div>  
          </div>
      </div>
    </div>
     
  );
}

export default App;
