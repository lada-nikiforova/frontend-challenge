// import './App.css'
import PageListCats from './pages/PageListCats'
import { HashRouter, Routes, Route} from 'react-router-dom';
import PageFavorites from './pages/PageFavorite'

const App = () => {
  return ( 
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageListCats />} />
        <Route path="/favorite" element={<PageFavorites />} />
      </Routes>
    </HashRouter>
  )
}
export default App
