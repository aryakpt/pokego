import './styles/global.css';
import { HomePage, Detail } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';
import Game from './pages/Game/Game';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:pokemonName" element={<Detail />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
