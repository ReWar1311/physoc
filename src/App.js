import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Gallary from './pages/Gallary';
import Events from './pages/Events';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/gallary" element={<Gallary />}>
        </Route>
        <Route path="/Events" element={<Events />}>
        </Route>
        <Route path="/Team" element={<Team />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
