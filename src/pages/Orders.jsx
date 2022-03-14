import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product/Product";


function Orders() {

    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get('https://622ce8fd087e0e041e1669d2.mockapi.io/orders');
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            setIsLoading(false);
          } catch (error) {
            alert('Ошибка при запросе заказов');
            console.error(error);
          }
        })();
      }, []);

    return(
        <div className="content">
            <h1>Мои Заказы</h1>
       
            <div className="products__wrapper">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Product key={index} loading={isLoading} {...item} />
                ))}   
            </div>
        </div>
    )
};

export default Orders;