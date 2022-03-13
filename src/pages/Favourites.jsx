import Product from "../components/Product/Product";

function Favourites({items, onAddToFavourite}) {
    return(
        <div className="content">
            <h1>Мои закладки</h1>
        <div className="products__wrapper">{
             items.map((item, id) => (
               <Product 
                key={id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                id={item.id}
                favourited={true}
                onFavourite={onAddToFavourite}
               />
             ))
            }
        </div>
        </div>
    )
};

export default Favourites;