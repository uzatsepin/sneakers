import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import Shopping from "./components/Shopping/Shopping";

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 12999, 
    imgUrl: './images/products/product_1.jpeg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270', 
    price: 11999, 
    imgUrl: './images/products/product_2.jpeg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 8499, 
    imgUrl: './images/products/product_3.jpeg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider', 
    price: 8999, 
    imgUrl: './images/products/product_4.jpeg'
  }
]

function App() {
  return (
    <div className="wrapper">
      <Shopping/>
      <Header/>

     <div className="content">
        <div className="product__search-inner">
          <h1>Все кроссовки</h1>
          <div className="product__search">
            <img src="images/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products__wrapper">{
             arr.map((obj, id) => (
               <Product 
                key={id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imgUrl}
                onClick={() => {console.log(id)}}
               />
             ))
            }
        </div>
     </div>
    </div>
     
  );
}

export default App;
