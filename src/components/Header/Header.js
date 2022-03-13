import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
        <div className="header__left">
        <Link to="/">
          <img width={40} height={40} src="/images/logo.png" alt="" className="" />
            <div className="header__info">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
        </Link>
          </div>
        <ul className="header__right">
          <li onClick={props.onClickCart} className="header__card">
            <img className="header__card-img" width={18} height={18} src="/images/cart.svg" alt="cart" />
            <span>1206 руб.</span>
            </li>
          <li>
            <Link to="/favourites">
              <img className="header__favourite-img" width={18} height={18} src="images/favourite.svg" alt="favourite" />
            </Link>
          </li>
          <li>
            <img className="header__user-img" width={18} height={18} src="/images/user.svg" alt="user" />
          </li>
          
        </ul>
      </header>
    )
}

export default Header;