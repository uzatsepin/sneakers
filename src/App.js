import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import Shopping from "./components/Shopping/Shopping";
import { useState, useEffect } from "react";

function App() {

  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

 useEffect(() => {
  fetch('https://622ce8fd087e0e041e1669d2.mockapi.io/items')
  .then(res => {return res.json()})
  .then(json => setItems(json));
 }, [])

 const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
 }


  return (
    <div className="wrapper">
      {cartOpened && <Shopping items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>

     <div className="content">
        <div className="product__search-inner">
          <h1>Все кроссовки</h1>
          <div className="product__search">
            <img src="images/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products__wrapper">{
             items.map((item, id) => (
               <Product 
                key={id}
                title={item.title}
                price={item.price}
                imageUrl={item.imgUrl}
                onFavourite={() => {console.log('Добавили в закладки')}}
                onPlus={(obj) => onAddToCart(obj)}
               />
             ))
            }
        </div>
     </div>
    </div>
     
  );
}

export default App;
