import Product from "../components/Product/Product";

function Home({searchValue, onChangeSearchInput, items, onAddToCart, onAddToFavourite, cartItems, added}) {
    return (
        <div className="content">
        <div className="product__search-inner">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все Кроссовки'}</h1>
          <div className="product__search">
            <img src="images/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products__wrapper">{
             items.filter((item) => 
             item.title.toLowerCase().includes(searchValue.toLowerCase()))
             .map((item, id) => (
               <Product 
                key={id}
                title={item.title}
                price={item.price}
                imageUrl={item.imgUrl}
                id={item.id}
                onPlus={(obj) => onAddToCart(obj)}
                onFavourite={(obj) => onAddToFavourite(obj)}
                added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
               />
             ))
            }
        </div>
     </div>
    )
}

export default Home;