import Header from "./components/Header/Header";
import Shopping from "./components/Shopping/Shopping";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Home  from "./pages/Home";
import Favourites from "./pages/Favourites";
import AppContext from "./context";

function App() {

  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourite, setFavourite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  async function fetchData() {
    const cartResponse = await axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/cart');
    const favouritesResponse = await axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/favourites');
    const itemsResponse = await axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/items');

    setIsLoading(false);

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
    if (favourite.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      axios.delete(`https://622ce8fd087e0e041e1669d2.mockapi.io/favourites/${obj.id}`);
      setFavourite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      const { data } = await axios.post('https://622ce8fd087e0e041e1669d2.mockapi.io/favourites', obj);
      setFavourite((prev) => [...prev, data]);
    }
  } catch (error) {
    alert('Не удалось добавить в фавориты');
  }
};


 const onRemoveFromCart = (id) => {
  axios.delete(`https://622ce8fd087e0e041e1669d2.mockapi.io/cart/${id}`, id);
  setCartItems(prev => prev.filter(item => item.id !== id));
 }

 const onChangeSearchInput = (event) => { 
  setSearchValue(event.target.value)
 }

 const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
 }


  return (
    <AppContext.Provider value={{cartItems, favourite, items, isItemAdded, onAddToFavourite, setCartOpened, setCartItems }}>
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
              isLoading={isLoading}
              />
            </Route>
            <Route path="/favourites">
              <Favourites/>
            </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
