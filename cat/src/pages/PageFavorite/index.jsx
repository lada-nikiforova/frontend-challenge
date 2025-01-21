// import Header from "../../components/Header/Header";
// import CatList from "../../components/List/CatList";
// import "./index.scss"
// import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header/Header";
import FavoriteList from "../../components/List/FavoriteList";


const PageFavorites = () => {
  return (
    <div>
        <Header></Header>
        <FavoriteList></FavoriteList>
    </div>
);
}

export default PageFavorites;