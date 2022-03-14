import Header from "./components/Header/Header";
import Shopping from "./components/Shopping/Shopping";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Home  from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {

  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourite, setFavourite] = useState([]);

 useEffect(() => {
  async function fetchData() {
    const cartResponse = await axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/cart');
    const favouritesResponse = axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/favourites');
    const itemsResponse = await axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/items');

    setCartItems(cartResponse.data);
    setFavourite(favouritesResponse.data);
    setItems(itemsResponse.data);
  }
  
  fetchData();
 }, [])

 const onAddToCart = (obj) => {
  try {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://622ce8fd087e0e041e1669d2.mockapi.io/cart${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://622ce8fd087e0e041e1669d2.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj])
    }
  } catch (error) {
    alert('Произошла ошибка!');
  }
 }

 const onAddToFavourite = async (obj) => {
  try {
    if (favourite.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://622ce8fd087e0e041e1669d2.mockapi.io/favourites/${obj.id}`)
      setFavourite((prev) => prev.filter((item) => item.id !== obj.id))
    } else {
      const {data} = await axios.post('https://622ce8fd087e0e041e1669d2.mockapi.io/favourites', obj);
      setCartItems(prev => [...prev, data])
    }
  } catch (error) {
    alert('Не удалось добавить в favourites')
  }
 }

 const onRemoveFromCart = (id) => {
  axios.delete(`https://622ce8fd087e0e041e1669d2.mockapi.io/cart/${id}`, id);
  setCartItems(prev => prev.filter(item => item.id !== id));
 }

 const onChangeSearchInput = (event) => { 
  setSearchValue(event.target.value)
 }


  return (
      <div className="wrapper">
        {cartOpened && <Shopping items={cartItems} onClose={() => setCartOpened(false)} onRemoveFromCart={onRemoveFromCart}/>}
        <Header onClickCart={() => setCartOpened(true)}/>
            <Route path="/" exact>
            <Home
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddToCart={onAddToCart}
              onAddToFavourite={onAddToFavourite}
              cartItems={cartItems}
              />
            </Route>
            <Route path="/favourites">
              <Favourites items={favourite} onAddToFavourite={onAddToFavourite} />
            </Route>
      </div>
  );
}

export default App;
