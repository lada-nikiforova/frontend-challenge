import { useState, useEffect } from "react";
import getCats from "../../api/apiClient";
import './CatList.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CatCard from "../CatCard/CatCard";

const FavoriteList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCats = async () => {
    setLoading(true);
    const data = JSON.parse(localStorage.getItem("favorite")) || [];
    setCats(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="container_cat-list">
      {loading && <p>Загрузка...</p>}
      <div className="list_cat">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
