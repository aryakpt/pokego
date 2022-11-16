import './styles/global.css';
import { Home, Detail } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:pokemonName" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
