import { useEffect, useState } from "react";
import './CatCard.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CatCard = ({cat}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        setIsFavorite(!isFavorite);
        const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
        const updatedFavorites = isFavorite ? storedFavorites.filter((item) => item.id !== cat.id) : [...storedFavorites, cat]; 
        localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    };
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
        const isFav = storedFavorites.some((item) => item.id === cat.id);
        setIsFavorite(isFav);
    }, [cat.id]);
    return (
        <div className="div_cat" key={cat.id}>
            <img src={cat.url} alt={`Cat`} style={{width: "225px", height: "225px", objectFit: 'cover'}}/>
            <div className="heart-icon" onClick={toggleFavorite} 
                onMouseEnter={() => setIsFavorite(true)}
                onMouseLeave={() => setIsFavorite(false)} 
                style={{ cursor: "pointer" }}> {isFavorite ? (
                    <FavoriteIcon sx={{ fontSize: 35, color: "red" }} />
                ) : (
                    <FavoriteBorderIcon sx={{ fontSize: 35, color: "red" }} />
                )}
            </div>
        </div>

    );
};

export default CatCard;
