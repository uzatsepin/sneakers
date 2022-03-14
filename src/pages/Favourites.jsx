import { useContext } from "react";
import Product from "../components/Product/Product";
import AppContext from "../context";

function Favourites() {
    const { favourite, onAddToFavourite } = useContext(AppContext);
    console.log({favourite})

    return(
        <div className="content">
            <h1>Мои закладки</h1>
        <div className="products__wrapper">
            {
                favourite.map((item, index) => (
                <Product key={index} favorited={true} onFavorite={onAddToFavourite} {...item} />
                ))
            }
            </div>
        </div>
    )
};

export default Favourites;