import { useState, useEffect } from "react";
import getCats from "../../api/apiClient";
import './CatList.scss';
import CatCard from "../CatCard/CatCard";
import Loader from "../Loader/Loader";

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);

  const fetchCats = async () => {
    setLoading(true);
    const data = await getCats();
    setCats(data);
    setLoading(false);
  };
  const loadCats = async () => {
    setLoad(true);
    const data = await getCats();
    setCats((prevCats) => [...prevCats, ...data]);
    setLoad(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);
  

  return (
    <div className="container_cat-list">
      {loading && <Loader/>}
      <div className="list_cat">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
      {load ? <Loader/> : <div className="container_button">
        <button className="load_button" onClick={loadCats} disabled={load}>Загрузить еще котиков</button>
      </div>} 
    </div>
  );
};

export default CatList;
