import { useState, useEffect } from "react";
import getCats from "../../api/apiClient";
import './CatList.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CatCard from "../CatCard/CatCard";

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const fetchCats = async () => {
    setLoading(true);
    const data = await getCats();
    setCats(data);
    setLoading(false);
  };
  const loadCats = async () => {
    setLoading(true);
    const data = await getCats();
    setCats((prevCats) => [...prevCats, ...data]);
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
      <button onClick={loadCats} style={{ marginTop: "20px" }} disabled={loading}>
        {loading ? "Загрузка..." : "Загрузить ещё котиков"}
      </button>
    </div>
  );
};

export default CatList;
