import './Header.scss';
// import { useNavigate } from 'react-router-dom';
import {Link, useLocation} from 'react-router-dom';
const Header = () => {
    const location = useLocation();
    return (
        <header className="header">
            <Link to={"/"} className={`link-page ${location.pathname === "/" ? 'active-btn' : ''}`}>
                Все котики
            </Link>
            <Link to={"/favorite"} className={`link-page ${location.pathname === "/favorite" ? 'active-btn' : ''}`}>
                Любимые котики
            </Link>            
        </header>
    );
}

export default Header;