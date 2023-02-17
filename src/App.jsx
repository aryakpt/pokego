import './styles/global.css';
import { Home, Detail } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:pokemonName" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
