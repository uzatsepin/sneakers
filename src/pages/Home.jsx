import Product from "../components/Product/Product";

function Home({searchValue, onChangeSearchInput, items, onAddToCart, onAddToFavourite, isLoading}) {

  const renderItems = () => {

    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
        <Product 
            key={index}
            onPlus={(obj) => onAddToCart(obj)}
            onFavourite={(obj) => onAddToFavourite(obj)}
            isLoading={isLoading}
            {...item}
        />
      ))
  }

    return (
        <div className="content">
        <div className="product__search-inner">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все Кроссовки'}</h1>
          <div className="product__search">
            <img src="images/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products__wrapper">{renderItems()}
        </div>
     </div>
    )
}

export default Home;