import AppContext from "../../context";
import { useContext  } from "react";

const Info = ({image, title, descr }) => {

    const {setCartOpened} = useContext(AppContext);

  return (
    <div className="shopping__empty">
            <img className="shopping__empty-img" src={image} alt="empty" width={120} />
            <div className="shopping__empty-wrapper">
                <h3 className="shopping__empty-title">{title}</h3>
                <p className="shopping__empty-text">{descr}</p>
            </div>
            <button onClick={() => setCartOpened(false)} className="shopping_btn"> <img src="images/arrow.svg" alt="arrow" /> Вернуться назад</button>    
    </div>
  )
}

export default Info;
